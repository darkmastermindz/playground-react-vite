// src/data/DataFetcher.js
export const hardcodedData = {
  company: [
    {
      department: "Engineering",
      teams: [
        {
          team: "Backend",
          projects: [
            {
              project: "API Development",
              tasks: [
                { task: "Design API", status: "Completed" },
                { task: "Implement API", status: "In Progress" },
              ],
            },
            {
              project: "Database Optimization",
              tasks: [{ task: "Analyze Performance", status: "Completed" }],
            },
          ],
        },
        {
          team: "Backend",
          projects: [
            {
              project: "API Development",
              tasks: [{ task: "Write Documentation", status: "Not Started" }],
            },
          ],
        },
        {
          team: "Frontend",
          projects: [
            {
              project: "UI Design",
              tasks: [
                { task: "Create Mockups", status: "Completed" },
                { task: "Develop UI", status: "In Progress" },
              ],
            },
          ],
        },
      ],
    },
    {
      department: "Marketing",
      teams: [
        {
          team: "SEO",
          projects: [
            {
              project: "Keyword Research",
              tasks: [{ task: "Identify Keywords", status: "Completed" }],
            },
          ],
        },
      ],
    },
  ],
};

export const fetchData = () => {
  // Simulate fetching new data
  return {
    company: [
      {
        department: "Engineering",
        teams: [
          {
            team: "Backend",
            projects: [
              {
                project: "API Development",
                tasks: [
                  { task: "Code Review", status: "Completed" },
                  { task: "Write Tests", status: "In Progress" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
};
