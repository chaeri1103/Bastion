/**
 * @file kick command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.run = (Bastion, message, args) => {
  if (!message.member.hasPermission(this.help.userPermission)) {
    /**
     * User has missing permissions.
     * @fires userMissingPermissions
     */
    return Bastion.emit('userMissingPermissions', this.help.userPermission);
  }
  if (!message.guild.me.hasPermission(this.help.botPermission)) {
    /**
     * Bastion has missing permissions.
     * @fires bastionMissingPermissions
     */
    return Bastion.emit('bastionMissingPermissions', this.help.botPermission, message);
  }

  if (!message.guild.available) return Bastion.log.info(`${message.guild.name} Guild is not available. It generally indicates a server outage.`);
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return Bastion.emit('commandUsage', message, this.help);
  }

  if (message.author.id !== message.guild.ownerID && message.member.highestRole.comparePositionTo(message.guild.members.get(user.id).highestRole) <= 0) return Bastion.log.info('User doesn\'t have permission to use this command on that role.');

  if (!message.guild.members.get(user.id).kickable) {
    return message.channel.send({
      embed: {
        color: Bastion.colors.red,
        description: `I don't have permissions to kick ${user}.`
      }
    }).catch(e => {
      Bastion.log.error(e);
    });
  }

  message.guild.members.get(user.id).kick().then(member => {
    let reason = args.slice(1).join(' ');
    if (reason.length < 1) {
      reason = 'No reason given';
    }

    message.channel.send({
      embed: {
        color: Bastion.colors.orange,
        title: 'Kicked',
        fields: [
          {
            name: 'User',
            value: user.tag,
            inline: true
          },
          {
            name: 'ID',
            value: user.id,
            inline: true
          },
          {
            name: 'Reason',
            value: reason,
            inline: false
          }
        ]
      }
    }).catch(e => {
      Bastion.log.error(e);
    });

    /**
     * Logs moderation events if it is enabled
     * @fires moderationLog
     */
    Bastion.emit('moderationLog', message.guild, message.author, this.help.name, member, reason);

    member.send({
      embed: {
        color: Bastion.colors.orange,
        title: `Kicked from ${message.guild.name} Server`,
        description: `**Reason:** ${reason}`
      }
    }).catch(e => {
      Bastion.log.error(e);
    });
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'k' ],
  enabled: true
};

exports.help = {
  name: 'kick',
  description: 'Kicks a mentioned user with an optional reason.',
  botPermission: 'KICK_MEMBERS',
  userPermission: 'KICK_MEMBERS',
  usage: 'kick @user-mention [Reason]',
  example: [ 'kick @user#0001 Reason for the kick.' ]
};
