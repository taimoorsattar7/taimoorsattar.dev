---
title: PHP Package Manager | Composer
description: Composer is a package manager for PHP.
date: 2020-03-09T20:17:15.244Z
tags:
  - Composer
  - PHP
featuredpost: false
---
Composer is a package manager for PHP. To get started you need to have composer install on your system. In windows, you have to install xmamp 

After installing `composer`, package manager

```
composer
```

## HOW IT WORKS
You can find out different packages at [PackaGist](https://packagist.org).

You can use the package using composer by writing the following command:

```
composer require <package/name>
```

It will create `composer.json` file on you current directory where you can list out different package list that is install on `vendor` folder. You make use of the package in your project, create the file `index.php`; type the following command:

```
require_once('vendor/autoload.php')
```

```
composer install
```

```
{
    "name": "your-brand-name/your-project",
    "type": "library",
    "description": "Your package description goes here",
    "keywords": ["relevant","tags","go","here"],
    "homepage": "https://yourcompany.com",
    "license": "MIT",
    "authors": [
        {
            "name": "Jordi Boggiano",
            "email": "j.boggiano@seld.be",
            "homepage": "http://seld.be",
            "role": "Developer"
        }
    ],
}
```

