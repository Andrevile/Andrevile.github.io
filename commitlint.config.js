module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새로운 기능
        'fix', // 버그 수정
        'post', // 글 발행
        'refactor', // 리팩토링
      ],
    ],
    'scope-enum': [2, 'always', ['notallowed']],
    'subject-case': [0],
  },
};
