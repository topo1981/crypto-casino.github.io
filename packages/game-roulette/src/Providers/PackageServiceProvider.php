<?php

namespace Packages\GameRoulette\Providers;

use Illuminate\Support\ServiceProvider;

class PackageServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $packageBaseDir = __DIR__ . '/../../';
        // load migrations
        $this->loadMigrationsFrom($packageBaseDir . 'database/migrations');
        // load routes
        $this->loadRoutesFrom($packageBaseDir . 'routes/web.php');
        // load views fom current package
        $this->loadViewsFrom($packageBaseDir . 'resources/views', 'game-roulette');
        // load language files
        $this->loadTranslationsFrom($packageBaseDir . 'resources/lang', 'game-roulette');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $packageBaseDir = __DIR__ . '/../../';
        // load package config
        $this->mergeConfigFrom(
            $packageBaseDir . 'config/config.php', 'game-roulette'
        );
    }
}
