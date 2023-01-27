---
slug: "a-dive-into-python-setup"
date: "2022-04-11"
title: "A Dive into Python Setup"
type: "post"
tags: ["environment", "python", "macos", "code"]  
draft: false
---
While I consider myself a frontend developer, and find the most joy and energy from working in JavaScript and the browser, my roles have traditionally been full stack, and I've always been in a position where I know just enough about the backend stack of the projects I work on to be dangerous and unblock myself. Last month, I rejoined the team at one my previous employers, but I've into a new (and admittedly, desirable) situation: The backend that I work with is in Python instead of C#.NET. I've dabbled in Python in the past for simple scripting and automation, but I haven't really taken a deep dive into building a non-trivial tool in Python yet, so it's a good time to take a dive into Python and get set up.  
  
*I do nearly all my personal development on macOS, so the following will be written with that in mind.*
  
There are many ways to get Python installed and get a suitable environment established for development, but what I've chosen is [`pyenv`](https://github.com/pyenv/pyenv) and [`poetry`](https://python-poetry.org/). macOS ships with Python, but it's not a recent version[^1], and it's managed by the system.

To ease management of dependencies and updates, I'll be installing `pyenv` through [Homebrew](https://brew.sh/). Homebrew provides a package manage for macOS, similar to linux package managers like `dpkg` or `RPM`, commonly via as `apt` or `DNF`/`yum` respectively. Beyond running `brew install pyenv`, there's some set up to be [followed in the `pyenv` repo](https://github.com/pyenv/pyenv#homebrew-in-macos).
  
At this time, the latest release of pyenv is `2.2.5`, which has `3.10.3` at the latest release of Python available, so install that and set it as the global python.  
  
```shell
pyenv install 3.10.3
pyenv global 3.10.3
```

Python dependency isolation is usually handled through virtualenvs or venvs, which will allow package installation to occur within that environment and not affect the base python install. Coming from the JavaScript ecosystem, where `npm` and `yarn` make dependency management and dependency isolation incredibly painless, I opt for using `poetry`, which provides a similar experience to frontend package management. Poetry will even create a virtualenv automatically and manage dependencies for the project in there, so it's often ready to use on a new project with minimal effort.  
  
The recommended method to [install poetry](https://python-poetry.org/docs/master/#installation) is through its installer script.   
  
```shell
curl -sSL https://install.python-poetry.org | python3 -  
```

`poetry` installs to `~/.local/bin`, which should already exist in `$PATH` on macOS. Once it's installed, create a new project directory, and initialize poetry in it.  
  
```shell
mkdir pyapp
cd ./pyapp  
poetry init
```  
  
Follow the prompts to set up `poetry` for that folder. After that, dependencies can be added with `poetry add`, not disimilar to `yarn`. If a virtualenv doesn't exist at this point, it will be created when adding the package. After that, `poetry run` can be used to run scripts and executables in its environment.  

```python
# hello.py
print("Hello, 世界!")
```

```shell
poetry run python3 ./hello.py
>> Hello, 世界!  
```
  
There we have it, Python running in a `npm`-like configuration on macOS.  

[^1]: `/usr/bin/python3` is `3.8.9` on macOS 12.3.1 at the time of writing this.
