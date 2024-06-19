---
author: Rasib Nadeem
title: "Why Arch is better than Ubuntu"
pubDatetime: 2023-12-31T01:47:35Z
featured: true
draft: true
tags:
  - linux
  - arch
description: "An article of why I find Arch to be easier than ubuntu"
---

Installing Arch is not difficult anymore. You can even install derivation of Arch like EndevourOS (which I personally use) that make the install process as easy as installing Ubuntu.

One reason why I had trouble moving to Ubuntu was the multiple ways to install sotware. There is the Debian packages, then you have .deb files, then you have different PPAs and then you have flatpacks and snaps. All this chaos is extremely jarring for simple windows users who were used to only one way of installing software.

Arch users on the otherhand only have a single CLI tool called `yay` that they use to install everything. The best thing about it is you can trust that that the `yay` command will help you install find the right package, and help you install

One example of this problem I want to share is that I was trying to install neovim on my Debian machine, but the neovim version on the stable debian repository was 0.6! That was too old for plugins to work. So you the solution they offered was to install the binary directly. But that felt wrong, because then there wouldn't be a single source of truth for my packages to list or update, and the `apt-get update && apt-get upgrade` wouldn't trigger update the package when a new version is out! A solution I found was to not use the `apt` and install convert over to the `nix` package manager that you can trust will have the latest version of the software, just like aur for arch.

But nix is very different from other packaging solution, so it's hard to dive into. They also don't have as good of a documentation as the Arch docs. So, using pacman over an AUR helper like `yay` over it is in my opinion the best way to enjoy a nice noob-friendly linux exprience without having to spend hours searching for the right command to install your favourite proprietery browser or any other program like vsc\*de :).
