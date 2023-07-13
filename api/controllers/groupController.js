const Group = require("../models/Group");

exports.currentGroups = async (req, res) => {
  const { id } = req.user;

  const currentGroups = await Group.find({ groupOwner: id });
  if (!currentGroups) res.send(404);
  else res.send(currentGroups);
};

// --- Group creation --------------------------------
exports.createGroup = async (req, res) => {
  const { id, name } = req.user; // Getting user ID
  const { groupName, groupDescription, members } = req.body; // Getting needed data for group creation

  // Neglating requests without user ID
  if (!id) {
    response.send({
      error: "You cannot create a group",
    });
  }

  try {
    const groupCount = await Group.find({ groupOwner: id });
    let maxGroupCreates = 2;

    const creatorPermissions = { member: id, role: "admin" };
    let memberArray = [...members];
    const membersPermissions = memberArray.map((member) => {
      return { member: member, role: "member" };
    });

    // --- Max group count
    if (groupCount.length >= maxGroupCreates) {
      res.send({
        error: `You can only create ${maxGroupCreates} groups`,
      });
    } else {
      // Group creation
      const createdGroup = await Group.create({
        groupOwner: id,
        members: [id, ...members],
        groupName: groupName,
        groupDescription: groupDescription,
        groupPermissions: [creatorPermissions, ...membersPermissions],
        activityLog: [
          {
            description: `${name} Created the group`,
          },
        ],
      });

      res.send({
        message: "Group created successfully",
        createdGroup,
      });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

exports.deleteGroup = async (req, res) => {
  const { id, power } = req.user;
  const { groupId } = req.params;

  try {
    if (power === "admin") {
      const groupDeleted = await Group.findByIdAndDelete({
        _id: groupId,
      });

      if (groupDeleted) res.send({ message: `Group deleted by ${power}` });
      else res.send({ error: "Group not found" });
    }

    // This is not right, implement it right
    if (power === "user") {
      const groupDeleted = await Group.findByIdAndDelete({
        _id: groupId,
        groupOwner: id,
      });

      if (!groupDeleted) {
        res.send({ error: "Group not found" });
      } else {
        res.send({
          message: "Group deleted successfully",
          groupName: groupDeleted.groupName,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};
