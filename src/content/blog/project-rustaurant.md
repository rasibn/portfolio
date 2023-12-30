---
author: Rasib Nadeem
title: "Project: Rustaurant"
featured: true
draft: false
slug: rustaurant
pubDatetime: 2023-04-13T03:20:35Z
tags:
  - project
  - rust
  - WebAssembly
  - axum
  - yew

description: "A restaurant reviewing website built using using Rust compiled to WASM"
---

## Links

- repo: "https://github.com/Rasib0/Rustaurant"

## Project Description

- used [Yew](https://yew.rs/) for frontend.
- used Axum, a backend framework by team behind [tokio](https://tokio.rs)

## Learnings

- Frontend Rust sucks
- Yew documentation sucked; they had a major change version change recently but didn't update their docs, massive L
- Backend Rust is amazing
- Making your own auth is hard (skill issue 🥲)
- Writing `.clone` everywhere is emotionally painful, so you try to fight the borrow-checker
- But you know you lost the battle, when the answer you found is just wrapping the thing in a good 'ol `Rc<RefCell<T>>`
