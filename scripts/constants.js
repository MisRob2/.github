// See docs/community-automations.md

const LE_BOT_USERNAME = 'misha-test-bot[bot]';
const SENTRY_BOT_USERNAME = 'sentry-io[bot]';
const DEPENDABOT_USERNAME = 'dependabot[bot]';
const RTIBBLESBOT_USERNAME = 'MisRob';
const BOT_USERNAMES = [
  LE_BOT_USERNAME,
  SENTRY_BOT_USERNAME,
  DEPENDABOT_USERNAME,
  RTIBBLESBOT_USERNAME,
];

// close contributors are treated a bit special in some workflows,
// for example, we receive a high priority notification about their
// comments on all issues rather than just on 'help wanted' issues
const CLOSE_CONTRIBUTORS = [
  'AadarshM07',
  'Abhishek-Punhani',
  'BabyElias',
  'Dimi20cen',
  'EshaanAgg',
  'GarvitSinghal47',
  'habibayman',
  'iamshobhraj',
  'indirectlylit',
  'Jakoma02',
  'KshitijThareja',
  'muditchoudhary',
  'nathanaelg16',
  'nikkuAg',
  'Prashant-thakur77',
  'Sahil-Sinha-11',
  'shivam-daksh',
  'shruti862',
  'thesujai',
  'vtushar06',
  'WinnyChang',
  'yeshwanth235',
];

const TEAMS_WITH_CLOSE_CONTRIBUTORS = ['gsoc-contributors', 'learning-equality-community-guide'];

const KEYWORDS_DETECT_ASSIGNMENT_REQUEST = [
  'assign',
  'assigned',
  'work',
  'working',
  'contribute',
  'contributing',
  'request',
  'requested',
  'pick',
  'picked',
  'picking',
  'address',
  'addressing',
  'handle',
  'handling',
  'solve',
  'solving',
  'resolve',
  'resolving',
  'try',
  'trying',
  'grab',
  'grabbing',
  'claim',
  'claimed',
  'interest',
  'interested',
  'do',
  'doing',
  'help',
  'take',
  'want',
  'would like',
  'own',
  'on it',
  'available',
  'got this',
];

const ISSUE_LABEL_HELP_WANTED = 'help wanted';
const LABEL_COMMUNITY_REVIEW = 'community-review';

// Will be attached to bot messages when not empty
// const GSOC_NOTE = '';
const GSOC_NOTE = `\n\n**Are you preparing for Google Summer of Code? See our [GSoC guidelines.](https://learningequality.org/contributing-to-our-open-code-base/#google-summer-of-code)**`;

const BOT_MESSAGE_ISSUE_NOT_OPEN = `Hi! 👋 \n\n Thanks so much for your interest! **This issue is not open for contribution. Visit [Contributing guidelines](https://learningequality.org/contributing-to-our-open-code-base) to learn about the contributing process and how to find suitable issues. If there are no unassigned 'help wanted' issues available, please wait until new ones are added.** \n\n We really appreciate your willingness to help. 😊${GSOC_NOTE}`;

const BOT_MESSAGE_ALREADY_ASSIGNED = `Hi! 👋 \n\n Thanks so much for your interest! **This issue is already assigned. Visit [Contributing guidelines](https://learningequality.org/contributing-to-our-open-code-base) to learn about the contributing process and how to find suitable issues. If there are no unassigned 'help wanted' issues available, please wait until new ones are added.** \n\n We really appreciate your willingness to help. 😊${GSOC_NOTE}`;

/* const BOT_MESSAGE_PULL_REQUEST = `👋 Thanks for contributing! \n\n We will assign a reviewer within the next two weeks. In the meantime, please ensure that:\n\n- [ ] **You ran \`pre-commit\` locally**\n- [ ] **All issue requirements are satisfied**\n- [ ] **The contribution is aligned with our [Contributing guidelines](https://learningequality.org/contributing-to-our-open-code-base). Pay extra attention to [Using generative AI](https://learningequality.org/contributing-to-our-open-code-base/#using-generative-ai). Pull requests that don't follow the guidelines will be closed.**\n\nWe'll be in touch! 😊`; */

const BOT_MESSAGE_PULL_REQUEST = `👋 Thanks for contributing! \n\n To proceed in the review process, please check that you've ensured:\n\n- [ ] **Pull request contains correctly filled _AI usage_ section & follows our AI guidance:**\n\n  <details>\n  <summary>Details</summary>\n\n  State explicitly if you did not use AI or used it & how.\n\n  If yes, ensure that the PR is aligned with [Using AI](https://learningequality.org/contributing-to-our-open-code-base/#using-generative-ai) as well as our DEEP framework.\n\n The DEEP asks that when using AI you:\n\n  - **Disclose** — Be open about when you've used AI for support.\n  - **Engage critically** — Question what is generated. Verify claims and sources.\n  - **Edit** — Digest and refine AI output rather than copy-pasting it.\n  - **Process sharing** — Explain how you used the AI so others can learn.\n\n  Examples of good disclosures:\n\n  > "I used Gemini to help draft this issue from my rough notes. I edited the description for accuracy, confirmed the reproduction steps myself, and trimmed the verbose output."\n\n  > "This is based on a Claude summary of clearinghouse feedback. I cross-checked the key points against the original feedback and rewrote the requirements in my own words."\n\n  </details>\n- [ ] **You ran \`pre-commit\` locally**\n- [ ] **All issue requirements are satisfied**\n\n After the above is satisfied, we will assign a reviewer (usually within 2 weeks).`;

const HOLIDAY_MESSAGE = `Season's greetings! 👋 \n\n We'd like to thank everyone for another year of fruitful collaborations, engaging discussions, and for the continued support of our work. **Learning Equality will be on holidays from December 22 to January 5.** We look forward to much more in the new year and wish you a very happy holiday season!${GSOC_NOTE}`;

const BOT_MESSAGE_RTIBBLESBOT_REVIEW = `📢✨ **Before we assign a reviewer, we'll turn on \`@rtibblesbot\` to pre-review. Its comments are generated by an LLM, and should be evaluated accordingly.**`;

const BOT_MESSAGE_COMMUNITY_REVIEW = `📢✨ **Before we assign a reviewer, we'll invite community pre-review. See the [community review guidance](https://github.com/learningequality/.github/blob/main/docs/community-review.md) for both authors and reviewers.**`;

// Repositories to include in PR statistics reports
const PR_STATS_REPOS = [
  'kolibri',
  'studio',
  'kolibri-design-system',
  'le-utils',
  '.github',
  'ricecooker',
];

// Repositories in which we accept open-source contributions
const COMMUNITY_REPOS = [...PR_STATS_REPOS];

module.exports = {
  LE_BOT_USERNAME,
  BOT_USERNAMES,
  CLOSE_CONTRIBUTORS,
  KEYWORDS_DETECT_ASSIGNMENT_REQUEST,
  ISSUE_LABEL_HELP_WANTED,
  BOT_MESSAGE_ISSUE_NOT_OPEN,
  BOT_MESSAGE_ALREADY_ASSIGNED,
  BOT_MESSAGE_PULL_REQUEST,
  BOT_MESSAGE_RTIBBLESBOT_REVIEW,
  RTIBBLESBOT_USERNAME,
  LABEL_COMMUNITY_REVIEW,
  BOT_MESSAGE_COMMUNITY_REVIEW,
  TEAMS_WITH_CLOSE_CONTRIBUTORS,
  HOLIDAY_MESSAGE,
  PR_STATS_REPOS,
  COMMUNITY_REPOS,
};
