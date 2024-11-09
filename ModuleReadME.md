Module 17 Social-Network

Introduction
License: MIT | TypeScript
This application operates on a MongoDB database, providing a social media-like experience where you interact with the app through various API routes.

Table of Contents
Required Technologies
Installation
Usage
Code Snippet
Features
License
Technologies
Credits

Required Technologies
To run this project, you’ll need Node.js and its Node Package Manager (npm).
You can download Node.js and npm here and follow the installation instructions provided.

Additionally, MongoDB is required. To install MongoDB, follow this link to the MongoDB website and follow their installation guide.

You’ll also need an API debugging tool to test interactions with the database. We recommend Insomnia, which you can install here. Follow their guide to get Insomnia set up on your system.

Installation
After downloading the files to your machine, open the project folder, and start a terminal session in the root directory. To install all necessary dependencies, run:

bash
Copy code
npm install
To start the server, use:

bash
Copy code
npm run start
Additional commands are listed in the package.json file.

Usage
With the server running and Insomnia set up, you can now send requests to the server. You’ll be provided with a link to access the server, typically http://localhost:3001.

Here’s a list of available routes and their request types. The type of request is indicated, followed by the route. Explanations and required JSON data are provided where necessary. Make sure to format your URLs like this: http://localhost:3001/api/users.

Users
Get (Fetches all users):
/api/users

Post (Creates a new user):
/api/users
JSON format:

json
Copy code
{
  "username": "demo",
  "email": "email@example.net"
}
Get (Fetches a specific user by ID):
/api/user/{userId}

Put (Updates user information):
/api/user/{userId}
JSON format for update:

json
Copy code
{
  "username": "demo",
  "email": "email@example.net"
}
Delete (Removes a user):
/api/user/{userId}

Friends
Post (Adds friends):
api/users/{userId}/friends
JSON format:

json
Copy code
{
  "friends": [
      "{friendId1}",
      "{friendId2}"
  ]
}
Delete (Removes a friend):
api/users/{userId}/friends/{friendsId}

Thoughts
Thoughts are equivalent to posts within this social media framework.

Get (Fetches all thoughts):
/api/thoughts

Post (Creates a thought):
/api/thought
JSON format:

json
Copy code
{
  "thoughtText": "Sample text",
  "username": "demo"
}
Get (Fetches a specific thought by ID):
/api/thought/{thoughtId}

Put (Updates a thought):
/api/thought/{thoughtId}
JSON format:

json
Copy code
{
  "thoughtText": "Updated text",
  "username": "demo"
}
Delete (Removes a thought):
/api/thought/{thoughtId}

Reactions
Reactions work like comments within this social media structure.

Post (Creates a reaction):
/api/thought/{thoughtId}/reactions
JSON format:

json
Copy code
{
  "reactionBody": "Sample reaction text",
  "username": "demo"
}
Delete (Removes a reaction):
/api/thought/{thoughtId}/reactions/:reactionId

Code Snippet
Here’s an example of the function used to add friends to a user. This function first finds the user by their ID and updates their list of friends based on the provided data. Then, it loops through each friend in the array to add the user ID to each friend’s list of friends. Upon successful addition, a confirmation message is sent.

typescript
Copy code
export const addFriend = async(req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: { friends: req.body.friends } },
            { runValidators: true, new: true },
        );

        if (!user) {
            return res.status(404).json({ message: 'No user found with that ID!' });
        }

        for (let i = 0; i < req.body.friends.length; i++) {
            const friend = await User.findOneAndUpdate(
                { _id: req.body.friends[i] },
                { $set: { friends: req.params.userId } },
                { runValidators: true, new: true },
            );

            if (!friend) {
                return res.status(404).json({ message: 'No user found with that username!' });
            }
        }

        res.json({ message: 'Friend(s) successfully added!' });
    } catch (err: any) {
        res.status(500).json(err);
    }
};

Features
This application includes the following capabilities:

View, create, update, and delete users.
View specific user profiles.
Add or remove friends from user profiles.
View, create, update, and delete thoughts.
View individual thoughts.
Add or remove reactions on thoughts.

License
Licensed under the MIT license.

Technologies Used
The mongoose docs here (general mongoose help)
Stack Overflow (For specific mongoose issues and ideas)
Node.js (for installing packages as well as building and running code).
Visual Studio Code (for writing code).
Mozila Web Docs and W3 Schools (for getting help with TypeScript).

Credits
Parker Speares
