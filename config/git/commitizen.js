'use strict';

module.exports = {
  // Добавим описание на русском языке ко всем типам
  types: [
      { value: 'feat', name: '1. feat:      Добавление новой функциональности' },
      { value: 'chore', name: '2. chore:     Задачи обслуживания, процессы сборки, не связанные с пользователем' },
      { value: 'fix', name: '3. fix:       Устранении ошибки или проблемы в кодовой базе' },
      { value: 'docs', name: '4. docs:      Внесение изменений в документацию' },
      { value: 'style', name: '5. style:     Изменения стиля кода, форматирование, отступы и корректировка пробелов' },
      { value: 'refactor', name: '6. refactor:  Реструктуризация или оптимизация существующего кода' },
      { value: 'test', name: '7. test:      Добавление или изменение тестов' },
      { value: 'perf', name: '8. perf:      Изменения повышающие производительность' },
      { value: 'ci', name: '9. ci:        Настройка CI и работа c скриптами' },
      { value: 'revert', name: '10. revert:   Откат на предыдущие коммиты' },
  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [
    { name: 'project' },
    { name: 'ui' },
    { name: 'api' },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // Поменяем дефолтные вопросы
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите свою ОБЛАСТЬ:',
    subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    footer:
      'Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'МЕТА ДАННЫЕ:',

  // limit subject length
  subjectLimit: 72,
};