/**
 * UTILMINT DATA ARCHITECTURE - SUBJECTS & FORMULA SCHEMAS
 */

export const SubjectsData = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "math-symbols",
    description: "Pure and applied math formulas spanning algebra, calculus, geometry, and linear algebra.",
    categoryCount: 14,
    formulaCountPlaceholder: 1250,
    categories: [
      { id: "algebra", name: "Algebra" },
      { id: "calculus", name: "Calculus" },
      { id: "geometry", name: "Geometry" },
      { id: "trigonometry", name: "Trigonometry" }
    ]
  },
  {
    id: "physics",
    name: "Physics",
    icon: "atom",
    description: "Classical mechanics, quantum physics, thermodynamics, electromagnetism, and relativity.",
    categoryCount: 10,
    formulaCountPlaceholder: 890,
    categories: [
      { id: "mechanics", name: "Classical Mechanics" },
      { id: "thermodynamics", name: "Thermodynamics" },
      { id: "electromagnetism", name: "Electromagnetism" }
    ]
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "flask",
    description: "Physical chemistry, stoichiometry, thermodynamics, electrochemistry, and kinetics.",
    categoryCount: 8,
    formulaCountPlaceholder: 640,
    categories: [
      { id: "stoichiometry", name: "Stoichiometry" },
      { id: "thermo-chem", name: "Thermochemistry" }
    ]
  }
];

/**
 * Scalable Formula Card Schema Blueprint
 */
export const FormulaCardTemplate = {
  id: "math-alg-001",
  subjectId: "mathematics",
  categoryId: "algebra",
  title: "Quadratic Formula",
  formulaLatex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
  variables: [
    { name: "a", symbol: "a", unit: "Dimensionless", desc: "Coefficient of x² (a ≠ 0)" },
    { name: "b", symbol: "b", unit: "Dimensionless", desc: "Coefficient of x" },
    { name: "c", symbol: "c", unit: "Dimensionless", desc: "Constant term" }
  ],
  description: "Calculates the solutions of a quadratic equation ax² + bx + c = 0.",
  applications: "Physics trajectories, optimization problems, and profit modeling.",
  difficulty: "Beginner", // Beginner, Intermediate, Advanced
  tags: ["Algebra", "Roots", "Polynomials"]
};
