<p align="center">
    <img src="npm-fast-installer.png"></img>
</p>

<p align="center">
    NPM install configuration in top of YAML for fast NPM install usage.
</p>

<div align="center">

[![tag](https://img.shields.io/github/tag/fncolon/npm-fast-installer.svg)](https://github.com/fncolon/npm-fast-installer) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/fncolon/npm-fast-installer/blob/master/LICENSE) [![Issue](https://img.shields.io/github/issues/fncolon/npm-fast-installer)](https://img.shields.io/github/issues/fncolon/npm-fast-installer) [![Forks](https://img.shields.io/github/forks/fncolon/npm-fast-installer)](https://img.shields.io/github/forks/fncolon/npm-fast-installer) [![Stars](https://img.shields.io/github/stars/fncolon/npm-fast-installer)](https://img.shields.io/github/stars/fncolon/npm-fast-installer)

</div>

[See the documentation here on wiki also](https://github.com/fncolon/npm-fast-installer/wiki)

## Table Of Contents

* [Introduction](#introduction)
* [Structure of configuration file](#structure-of-configuration-file)
* [How to init sample configuration file?](#how-to-init-sample-configuration-file)
* [How to run the configuration file?](#how-to-run-the-configuration-file)

## Introduction

NPM install configuration in top of YAML for fast NPM install usage.

## Structure of configuration file

```yaml
# install dependencies (also we know as simple `npm install`)
dependencies:       
  # example       
  express: "latest"  
# install devdependencies (also we know as `npm install -D` which contains package for development and build our bundle)    
devDependencies:  
# install global dependencies (also we know as `npm install -g`)      
global:
```

## How to init sample configuration file

You can do like the following for example:

```bash
npx npm-fast-installer init pre-commit-installation
```

## How to run the configuration file

You can do like the following for example:

```bash
npx npm-fast-installer ./pre-commit-installation.yml
```
