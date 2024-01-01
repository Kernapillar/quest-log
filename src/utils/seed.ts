import { Quest, Frequency } from '../models/quest';

export const quests = [
  new Quest(
    1,
    'Get Jamming',
    'Go to Guitar Center and buy a guitar. Play Stairway to Heaven and impress 5 customers',
    { 'Go to Guitar Center': true, 'Impressed customers': 5 },
    ['Got Kicked out of Guitar Center'],
    true,
    Frequency.Weekly
  ),
  new Quest(
    2,
    'Shopping list',
    'Go to the store and buy 5 items',
    {'Items': 5 },
    ['Food'],
    true,
    Frequency.Daily
  ),
  new Quest(
    3,
    'Cookie Monster',
    'Bake and eat a batch of cookies without sharing.',
    { 'Bake cookies': false, 'Eat all cookies': false },
    ['Cookie Monster Badge', 'Sugar Rush'],
    true,
    Frequency.Weekly
  ),    
  new Quest(
    4,
    'Talk Like a Pirate',
    'Spend an entire day talking like a pirate.',
    { 'Survive the day': false },
    ['Pirate Badge', 'Improved Vocabulary'],
    true,
    Frequency.Monthly
    ),
  new Quest(
    9,
    'The Floor is Lava',
    'Spend an entire day without touching the floor inside your house.',
    { 'Survive the day': false },
    ['Lava Survivor Trophy', 'Improved Agility'],
    true,
    Frequency.Once
    ),
];