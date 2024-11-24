// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference/rules.md
// https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/src/index.ts

export default {
  prompt: {
    questions: {
      type: {
        enum: {
          ci: {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
        },
        description: "Select the type of change that you're committing",
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      breakingBody: {
        description: 'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
    },
  },
  extends: ['@commitlint/config-conventional'],
};
