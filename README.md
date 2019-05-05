# Rougelike Kata

tl;dr [how to run](#how-to-run)

The aim of this kata is to create a rougelike game.

Games like that are played in the console on a board consisting of various elements.

The basic board is 28x14 and consists only of floor tiles, represented as `.` character, like this:

```
............................
............................
............................
............................
............................
............................
............................
............................
............................
............................
............................
............................
............................
............................

```

## The Hero

The Hero is represented as `@` character. At the beginning he should be shown at some given place on the board.

Secondly, the user should be able to control The Hero by issuing commands `up`, `down`, `left`, `right` (or you can just program in control with arrow keys, fancy!).

Every movement should refresh the board to show the new position of The Hero. If The Hero's movement would cause him to go over the board boundaries he should stay at his old position.

## What's going on

When you render the board let the user know that The Hero waits for him with a prompt shown below the board - for example "Tell @ to move with up, down, left, right commands".

This prompt should be updated every time something happens within the game - The Hero receives damage, finds and item, etc.

## Chose your own adventure

When The Hero is ready, you can chose any of the tasks below: Monsters, Items or Walls. When you finish one, feel free to take another, or switch between them as you like.

## Monsters

The Hero wouldn't be a hero if he couldn't fight monsters. Give The Hero some HP (health points, 10 should suffice) and throw some monsters into the mix!

- the monsters should have their own HP
- at the beginning they can be stationary, but you have to make sure to spawn them on floor tiles on the board, not on something that's already there
- use uppercase letters from latin alphabet to represent the monsters
- render three random monsters in random positions at the start of the game

At the beginning, introduce a snake `S` with 2 HP and a dragon `D` with 25 HP. After rendering them, or any other monsters you chose to add, inform user in the prompt on how much HP each one has.

### Damage

To simplify things, monsters deal the same amount of damage as their HP. If hero collides with a monster (either by stepping on it or, when monsters can move, by monster stepping on him) he loses the amount of HP the monster has (so he loses 2 when stepping on a snake and 25 when stepping on a dragon). If The Hero has 0 or less HP, he dies and the game starts again.

### Movement

Allow the monsters to roam the land freely, but not to freely - they're bound to The Hero's movements. If The Hero moves, they get a move too.

The same rules apply as for The Hero - they can move on any floor space, they can't leave the board and they can attack The Hero by stepping on him and dealing the damage equal to their HP.

Remember, that if The Hero tries to go out of bounds, he won't chane position, but he still moved so the monsters should move too! Specifics of their movement are left to your imagination - should they move randomly or chase The Hero?

### Spawning

If The Hero manages to kill all the monsters the game would be no fun! But too many monsters at once and game would be impossible. So what is the best time to spawn a new monster? Should it spawn at random place or should we make sure that The Hero has time to run? You decide!

## Items

Anything that The Hero can use to his aid. Or maybe some items should make life more difficult for them?

- items don't move, obviously; The Hero can pick them up by walking on them, which should make a prompt appear
- initially let's assume that an object picked is an object used
- objects should be represented with lowercase letters from latin alphabet
- render three random items in random positions at the beginning of the game

First two objects would be a healing potion `h`, that would restore HP of The Hero to the maximum and poison `p` that would remove 5HP from The Hero instantly.

### Inventory

What if The Hero could store some of those potions to help him in his adventures? First, lets save the picked item in an inventory and keep tabs on how many The Hero holds. Second, we need a way to access the inventory - how about `inv` command that would say in the prompt what and how many items The Hero has?

Since the potions wouldn't be activated by stepping on them (but remember, poison still would be!), there needs to be another way to use them. Simple command `use h` could be utilised to achieve that.

### Weapons

Now The Hero can carry things with them. Even if you didn't add monsters to your game, it still fits The Hero to wield a weapon.

Weapon should have damage points - if monsters are implemented it would mean that The Hero wouldn't just step on them and receive damage. Instead, walking on a monster wouldn't change position of The Hero, but hurt the monster, subtracting the amount of damage from monster's HP.

If monsters are not implemented, then The Hero would just be happy to have an awesome weapon with such and such damage and will brag to their friends about awesomeness of the weapon.

Introduce two weapons - a dagger `d` with 1 damage and an axe `a` with 20 damage.

### Spawning

The Hero got all the items on the board? Let's give them more! Same as the exercise with monsters - it's up to you to decide when to spawn more so that the game is fair and where to spawn them.

## Walls

Some obstacles could make the level more challenging.

- walls don't move; if they do they're doors, and that is out of scope of this kata
- neither The Hero or monsters (if implemented) can't go through walls; same rule applies as if they try to go over the map boundary
- walls are represented as `#` characters

In the beginning, add a the same pattern of walls of your choosing to the board when it's initialised. Then you can try and generate them randomly, or move to other tasks, but remember - sealing The Hero in a 1x1 room doesn't make a fun game!

This seems like an easy task and doesn't have any steps, but don't be deceived - generating an interesting randomised board where The Hero (and possibly monsters) can go around without being too restricted is no easy feat!

## More adventures!

All of the above should fill your time during a Coding Dojo. But if you want more to experiment after it ends, feel free to do so! Here are some ideas:

- some monsters could have ability to use weapons and other items
- traversing through walls could be permitted in some circumstances (special potion for The Hero, introducing a ghost monster?)
- add status effects - poison could work it's way over time, seeping 1HP every move The Hero takes until they have just 1HP left or find a potion; The Hero may wield a frost blade, making a monster immobile on hit
- colour the board! make floor different in enclosed spaces, The Hero and monsters with a special status can stand out better without any prompts
- experience system for killing monsters
- more and more levels to go through!

## How to run
1. Install [NodeJS](https://nodejs.org/en/download/)
2. Install [yarn](https://yarnpkg.com/en/docs/install)
3. `yarn install`
4. `yarn run game`
5. Run tests with: `yarn run test` or `yarn run test --watchAll`


## Protips

1. Don't mix CLI with Game (srsly, big class of everything is not a good idea).
2. Tests of CLI and Game should be separable too.
3. Would be nice to modify size of board in tests.
4. Board filled with a chars is not a smart idea - try to using OOP or Enum.
