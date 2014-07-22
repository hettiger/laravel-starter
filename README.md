laravel-starter
===============

A fresh Starting Point for Laravel Applications.

#### Installation

```bash
composer create --dev --stability="dev" hettiger/laravel-starter new-project
cd new-project
php artisan ide-helper:generate
bower install
npm install
```

#### Taskrunner

| Command | Description |
| ------- | ----------- |
| gulp | Run all build tasks |
| gulp watch | Watch the filesystem for changes and automatically rebuild the assets |

#### Tests

```bash
vendor/bin/codecept run
```
