# Huddle - Front End Challenge

Thanks for interviewing at Huddle and taking the time to do our technical test.

The aim of this exercise is to add a feature to an existing codebase. We're looking for use of best practices and clean, re-usable code.

We appreciate you're doing this in your free time, don't worry if you don't have time to complete everything, we're happy to look at partial solutions.

# Background (fictional)

Huddle are branching out by creating a brand new fin-tech product. An online wallet aimed at kids.

We've had our UX designer produce some mock-ups and have we have built a partial implementation of the 'home' screen.

Your task is to implement the 'tasks' functionality. This allows kids to earn pocket money by completing small jobs for
their parents.

You are free to change the existing front-end implementation as you see fit and refactor as appropriate. You shouldn't
need to alter server.js.

Feel free to add notes to this README file with any assumptions you make.

# The current project

Is built with create-react-app and has been tested with node 12.16.1

Can be executed with `npm start`

* Serves the web-app on `http://localhost:3000`
* Serves a back-end on `http://localhost:8080`

Create-react app supports proxying requests to the server to alleviate CORS concerns. The web-app makes requests to `:3000`,
see the documentation for more details:

https://create-react-app.dev/docs/proxying-api-requests-in-development/

We would not expect you to need to change any build configuration for this task.

# The Task

We would like you to implement the features listed below based on the included mockups, located within the `mockups` folder.

## Your solution should

- Fetch tasks with a status of 'to_do' from the API and display them on the tasks page (see `/mockups/Tasks.png`)
  - Each task should have the correct logo for its type
  - Each task should display its due date in a user-friendly string
- Implement the 'task actions' submenu. This should open on click and the user should be able to mark a task as "complete" (see `/mockups/Tasks2.png`)
- Add the 'complete' tab, which should show all tasks with a 'complete' status
- When the user navigates back to the home page, their balance and activity should have updated to reflect the tasks they have completed

NOTE: As you go you will likely want to refactor existing code. This is encouraged

# Bonus

If you have time, the following should be considered 'nice-to-have'

- Add the pie-chart like in the designs, this should show the ratio of to-do and complete tasks
- Add support for opening the context menu via right-click

# Designs

All mockups required for the task can be found in the `mockups` folder.

The home page

![homepage](/mockups/Home.png)

The initial tasks view

![tasks](/mockups/Tasks.png)

Tasks view with open dialogue

![tasks with open dialogue](/mockups/Tasks2.png)

# The API

The API has already been built for you, you shouldn't need to change it. The following requests are supported:

## Get a list of tasks

GET `/api/tasks`

Returns:

```
[
  {
    "id": "e0f4b293-e748-446d-b0c9-ab09970460f4",
    "title": "Lay the table",
    "type": "indoor",
    "status": "to_do",
    "value": "2.00",
    "date": "2020-01-20"
    "links": {
      "update": "/api/tasks/e0f4b293-e748-446d-b0c9-ab09970460f4"
    },
  },
  ...
]
```

## To mark a task as complete

PATCH `/api/tasks/e0f4b293-e748-446d-b0c9-ab09970460f4`

Body:

```
{ status: 'complete' }
```

# Submitting your solution

Please don't create public forks of this repo as your solution will be visible to everyone.

Either:

- Send us a ZIP of your solution, excluding node_modules
- Commit your local changes to master and create a git bundle:

```
git bundle create solution.bundle master
```
