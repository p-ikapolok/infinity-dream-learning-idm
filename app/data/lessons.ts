export interface Exercise {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Lesson {
  lessonId: string;
  title: string;
  duration: string;
  youtubeId: string;
  intro: string;
  learning: string;
  tasks: string[];
  exercise: Exercise;
}

export interface Subtopic {
  slug: string;
  title: string;
  lessons: Lesson[];
}

export interface Topic {
  slug: string;
  title: string;
  subtopics: Subtopic[];
}

export interface Subject {
  slug: string;
  title: string;
  color: string;
  topics: Topic[];
}

export const subjects: Subject[] = [
  {
    slug: "mathematics",
    title: "Mathematics",
    color: "from-blue-500 to-indigo-600",
    topics: [
      {
        slug: "numbers",
        title: "Numbers",
        subtopics: [
          {
            slug: "whole-numbers",
            title: "Whole Numbers",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Introduction to Whole Numbers",
                duration: "12 min",
                youtubeId: "t8XJMJ-jG_A",
                intro:
                  "Whole numbers are counting numbers starting from 0.",
                learning: `# Whole Numbers

Whole numbers are represented as:

$$W = \\{0,1,2,3,4...\\}$$

## Addition Property

If:

$$a = 5$$
$$b = 7$$

then:

$$a + b = 12$$

The answer remains a whole number.

## Multiplication Property

$$4 \\times 3 = 12$$

Whole numbers remain closed under multiplication.
`,
                tasks: [
                  "Watch lesson video",
                  "Read examples",
                  "Complete quiz"
                ],
                exercise: {
                  question:
                    "What is the sum of 14 + 6?",
                  options: ["20", "16", "24"],
                  correctIndex: 0
                }
              },
              {
                lessonId: "lesson-2",
                title: "Comparing Whole Numbers",
                duration: "9 min",
                youtubeId: "5mXOUA5R-qg",
                intro:
                  "Whole numbers can be arranged from smallest to largest.",
                learning: `# Comparing Numbers

We use symbols:

- > greater than
- < less than
- = equal to

Example:

$$45 > 12$$

because 45 is larger than 12.
`,
                tasks: [
                  "Study comparison symbols",
                  "Practice ordering numbers",
                  "Take quiz"
                ],
                exercise: {
                  question: "Which number is greater?",
                  options: ["56", "23", "12"],
                  correctIndex: 0
                }
              }
            ]
          },
          {
            slug: "fractions",
            title: "Fractions",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Understanding Fractions",
                duration: "15 min",
                youtubeId: "3tkH0nXfM88",
                intro:
                  "Fractions represent parts of a whole.",
                learning: `# Fractions

A fraction has:

- Numerator
- Denominator

Example:

$$\\frac{1}{2}$$

means one part out of two equal parts.
`,
                tasks: [
                  "Learn fraction terms",
                  "Watch diagrams",
                  "Practice examples"
                ],
                exercise: {
                  question: "What is the numerator in 3/5?",
                  options: ["3", "5", "8"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      },
      {
        slug: "geometry",
        title: "Geometry",
        subtopics: [
          {
            slug: "angles",
            title: "Angles",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Types of Angles",
                duration: "11 min",
                youtubeId: "KavG3Aru0lg",
                intro:
                  "Angles measure turns between lines.",
                learning: `# Types of Angles

- Acute angle
- Right angle
- Obtuse angle

A right angle measures:

$$90^\\circ$$
`,
                tasks: [
                  "Identify angles",
                  "Draw examples",
                  "Take quiz"
                ],
                exercise: {
                  question: "Which angle measures 90 degrees?",
                  options: ["Right angle", "Acute angle", "Obtuse angle"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: "english",
    title: "English",
    color: "from-rose-500 to-pink-600",
    topics: [
      {
        slug: "grammar",
        title: "Grammar",
        subtopics: [
          {
            slug: "parts-of-speech",
            title: "Parts of Speech",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Nouns and Pronouns",
                duration: "10 min",
                youtubeId: "dQw4w9WgXcQ",
                intro:
                  "Nouns name people, places, and things.",
                learning: `# Nouns

Examples of nouns:

- Teacher
- Nairobi
- Book

## Pronouns

Pronouns replace nouns.

Example:

Peter is reading.
He is reading.
`,
                tasks: [
                  "Identify nouns",
                  "Practice pronouns",
                  "Complete exercise"
                ],
                exercise: {
                  question: "Which word is a pronoun?",
                  options: ["She", "Desk", "School"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: "kiswahili",
    title: "Kiswahili",
    color: "from-amber-500 to-orange-600",
    topics: [
      {
        slug: "sarufi",
        title: "Sarufi",
        subtopics: [
          {
            slug: "nomino",
            title: "Nomino",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Utangulizi wa Nomino",
                duration: "8 min",
                youtubeId: "aqz-KE-bpKQ",
                intro:
                  "Nomino hutaja watu, vitu, au mahali.",
                learning: `# Nomino

Mifano:

- Kitabu
- Mwalimu
- Nairobi
`,
                tasks: [
                  "Soma mifano",
                  "Tambua nomino",
                  "Fanya zoezi"
                ],
                exercise: {
                  question: "Ni ipi nomino?",
                  options: ["Kitabu", "Haraka", "Vizuri"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: "science",
    title: "Science",
    color: "from-emerald-500 to-green-600",
    topics: [
      {
        slug: "human-body",
        title: "Human Body",
        subtopics: [
          {
            slug: "digestive-system",
            title: "Digestive System",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Parts of the Digestive System",
                duration: "13 min",
                youtubeId: "fY3J3s1n0GQ",
                intro:
                  "The digestive system helps break down food.",
                learning: `# Digestive System

Main organs:

- Mouth
- Stomach
- Small intestine
`,
                tasks: [
                  "Watch anatomy video",
                  "Label organs",
                  "Answer quiz"
                ],
                exercise: {
                  question: "Where does digestion begin?",
                  options: ["Mouth", "Stomach", "Heart"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: "social-studies",
    title: "Social Studies",
    color: "from-cyan-500 to-sky-600",
    topics: [
      {
        slug: "environment",
        title: "Environment",
        subtopics: [
          {
            slug: "resources",
            title: "Natural Resources",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Types of Resources",
                duration: "9 min",
                youtubeId: "M7lc1UVf-VE",
                intro:
                  "Resources are materials useful to people.",
                learning: `# Natural Resources

Examples:

- Water
- Forests
- Minerals
`,
                tasks: [
                  "Read examples",
                  "Identify local resources",
                  "Take quiz"
                ],
                exercise: {
                  question: "Which is a natural resource?",
                  options: ["Water", "Plastic", "Laptop"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: "agriculture",
    title: "Agriculture",
    color: "from-lime-500 to-green-700",
    topics: [
      {
        slug: "crop-production",
        title: "Crop Production",
        subtopics: [
          {
            slug: "soil",
            title: "Soil Types",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Understanding Soil",
                duration: "10 min",
                youtubeId: "ysz5S6PUM-U",
                intro:
                  "Different soils support different crops.",
                learning: `# Soil Types

- Clay soil
- Sandy soil
- Loam soil
`,
                tasks: [
                  "Study soil types",
                  "Compare textures",
                  "Complete activity"
                ],
                exercise: {
                  question: "Which soil is best for farming?",
                  options: ["Loam soil", "Rock", "Plastic"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: "ict",
    title: "ICT",
    color: "from-violet-500 to-purple-700",
    topics: [
      {
        slug: "computer-basics",
        title: "Computer Basics",
        subtopics: [
          {
            slug: "hardware",
            title: "Computer Hardware",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Input and Output Devices",
                duration: "11 min",
                youtubeId: "LXb3EKWsInQ",
                intro:
                  "Hardware refers to physical computer parts.",
                learning: `# Hardware Devices

## Input Devices

- Keyboard
- Mouse

## Output Devices

- Monitor
- Printer
`,
                tasks: [
                  "Identify devices",
                  "Classify hardware",
                  "Take quiz"
                ],
                exercise: {
                  question: "Which is an output device?",
                  options: ["Monitor", "Keyboard", "Mouse"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: "creative-arts",
    title: "Creative Arts",
    color: "from-fuchsia-500 to-pink-700",
    topics: [
      {
        slug: "drawing",
        title: "Drawing",
        subtopics: [
          {
            slug: "shading",
            title: "Shading Techniques",
            lessons: [
              {
                lessonId: "lesson-1",
                title: "Basic Pencil Shading",
                duration: "14 min",
                youtubeId: "hY7m5jjJ9mM",
                intro:
                  "Shading creates depth and realism.",
                learning: `# Pencil Shading

Techniques:

- Hatching
- Cross-hatching
- Blending
`,
                tasks: [
                  "Practice strokes",
                  "Draw shapes",
                  "Complete artwork"
                ],
                exercise: {
                  question: "Which technique smooths shading?",
                  options: ["Blending", "Typing", "Cutting"],
                  correctIndex: 0
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

export function findLesson(
  subjectSlug: string,
  topicSlug: string,
  subtopicSlug: string,
  lessonId: string
) {
  const normalize = (str: string = "") =>
    str.toLowerCase().replace(/\s+/g, "-");

  const subject = subjects.find(
    (s) => normalize(s.slug) === normalize(subjectSlug)
  );

  const topic = subject?.topics.find(
    (t) => normalize(t.slug) === normalize(topicSlug)
  );

  const subtopic = topic?.subtopics.find(
    (s) => normalize(s.slug) === normalize(subtopicSlug)
  );

  const lesson = subtopic?.lessons.find(
    (l) =>
      normalize(l.lessonId) === normalize(lessonId) ||
      normalize(l.title) === normalize(lessonId)
  );

  return {
    subject,
    topic,
    subtopic,
    lesson,
  };
}
}