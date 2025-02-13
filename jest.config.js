module.exports = {
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json", 
        "lcov", 
        "text", 
        "cobertura"
    ],
    reporters: [
        "default", [
            "jest-junit", { 
                outputDirectory: "test-results", 
                outputName: "jest-junit.xml" 
            }
        ]
    ]
  };
  