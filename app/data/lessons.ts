export const lessons = [
  // =====================================================
  // MATHEMATICS
  // =====================================================
  {
    subject: "mathematics",

    topics: [
      {
        topic: "numbers",

        subtopics: [
          {
            subtopic: "whole-numbers",

            lessons: [
              {
                id: "lesson-1",

                title: "Introduction to Whole Numbers",

                youtubeId: "t8XJMJ-jG_A",

                duration: "12 min",

                videoDuration: "5:30",

                tasks: [
                  "Watch introduction",
                  "Study examples",
                  "Complete exercise"
                ],

                intro: `
Whole numbers begin from zero and continue positively.
                `,

                learning: `
# Whole Numbers

Whole numbers include:

$$
0,1,2,3...
$$

## Addition

$$
5+3=8
$$

## Multiplication

$$
5 \\times 3 = 15
$$
                `,

                exercise: {
                  question: `
Calculate:

$$
12 + 8
$$
                  `,

                  options: [
                    "$20$",
                    "$18$",
                    "$15$"
                  ],

                  correctIndex: 0
                }
              },

              {
                id: "lesson-2",

                title: "Properties of Whole Numbers",

                youtubeId: "5mXOUA5R-qg",

                duration: "10 min",

                videoDuration: "4:20",

                tasks: [
                  "Study closure property",
                  "Learn commutative law",
                  "Attempt quiz"
                ],

                intro: `
Whole numbers follow important mathematical properties.
                `,

                learning: `
# Closure Property

If:

$$
a,b \\in W
$$

then:

$$
a+b \\in W
$$

# Commutative Property

$$
a+b=b+a
$$
                `,

                exercise: {
                  question: `
Which property is shown?

$$
3+5 = 5+3
$$
                  `,

                  options: [
                    "Closure",
                    "Commutative",
                    "Associative"
                  ],

                  correctIndex: 1
                }
              }
            ]
          },

          {
            subtopic: "fractions",

            lessons: [
              {
                id: "lesson-1",

                title: "Understanding Fractions",

                youtubeId: "f8Fractions",

                duration: "11 min",

                videoDuration: "5:10",

                tasks: [
                  "Learn numerator",
                  "Learn denominator",
                  "Practice examples"
                ],

                intro: `
Fractions represent parts of a whole.
                `,

                learning: `
# Fractions

Example:

$$
\\frac{1}{2}
$$

Top number is numerator.

Bottom number is denominator.
                `,

                exercise: {
                  question: `
Identify numerator:

$$
\\frac{3}{4}
$$
                  `,

                  options: [
                    "$4$",
                    "$3$",
                    "$7$"
                  ],

                  correctIndex: 1
                }
              }
            ]
          }
        ]
      },

      {
        topic: "geometry",

        subtopics: [
          {
            subtopic: "angles",

            lessons: [
              {
                id: "lesson-1",

                title: "Types of Angles",

                youtubeId: "angles001",

                duration: "9 min",

                videoDuration: "4:00",

                tasks: [
                  "Identify angles",
                  "Learn angle sizes",
                  "Take quiz"
                ],

                intro: `
Angles are formed when two lines meet.
                `,

                learning: `
# Acute Angle

Less than:

$$
90^\\circ
$$

# Right Angle

Exactly:

$$
90^\\circ
$$
                `,

                exercise: {
                  question: `
What is a right angle?
                  `,

                  options: [
                    "$45^\\circ$",
                    "$90^\\circ$",
                    "$120^\\circ$"
                  ],

                  correctIndex: 1
                }
              }
            ]
          }
        ]
      }
    ]
  },

  // =====================================================
  // ENGLISH
  // =====================================================
  {
    subject: "english",

    topics: [
      {
        topic: "grammar",

        subtopics: [
          {
            subtopic: "nouns",

            lessons: [
              {
                id: "lesson-1",

                title: "Types of Nouns",

                youtubeId: "noun001",

                duration: "8 min",

                videoDuration: "3:50",

                tasks: [
                  "Read examples",
                  "Identify nouns",
                  "Take quiz"
                ],

                intro: `
Nouns are naming words.
                `,

                learning: `
# Common Nouns

Examples:

- boy
- school
- teacher

# Proper Nouns

Examples:

- Kenya
- Nairobi
- John
                `,

                exercise: {
                  question: `
Which is a proper noun?
                  `,

                  options: [
                    "school",
                    "Kenya",
                    "teacher"
                  ],

                  correctIndex: 1
                }
              }
            ]
          },

          {
            subtopic: "verbs",

            lessons: [
              {
                id: "lesson-1",

                title: "Action Verbs",

                youtubeId: "verb001",

                duration: "7 min",

                videoDuration: "3:10",

                tasks: [
                  "Study verbs",
                  "Read sentences",
                  "Practice exercise"
                ],

                intro: `
Verbs describe actions.
                `,

                learning: `
# Examples of Verbs

- run
- jump
- write
- read
                `,

                exercise: {
                  question: `
Which word is a verb?
                  `,

                  options: [
                    "table",
                    "run",
                    "school"
                  ],

                  correctIndex: 1
                }
              }
            ]
          }
        ]
      }
    ]
  },

  // =====================================================
  // SCIENCE
  // =====================================================
  {
    subject: "science",

    topics: [
      {
        topic: "human-body",

        subtopics: [
          {
            subtopic: "digestive-system",

            lessons: [
              {
                id: "lesson-1",

                title: "Digestive System",

                youtubeId: "science001",

                duration: "13 min",

                videoDuration: "6:00",

                tasks: [
                  "Learn organs",
                  "Watch digestion process",
                  "Take quiz"
                ],

                intro: `
The digestive system breaks down food.
                `,

                learning: `
# Main Organs

- Mouth
- Stomach
- Intestines

# Function

Breaks food into nutrients.
                `,

                exercise: {
                  question: `
Which organ stores food temporarily?
                  `,

                  options: [
                    "Heart",
                    "Lungs",
                    "Stomach"
                  ],

                  correctIndex: 2
                }
              }
            ]
          }
        ]
      }
    ]
  }
];