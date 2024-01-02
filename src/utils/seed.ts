import { Quest, Frequency } from '../models/quest';
import { QuestLog } from '../models/questlog';

export const seedQuests = new QuestLog( 10, [
  new Quest(
    1,
    'Get Jamming',
    'Go to Guitar Center and buy a guitar. Play Stairway to Heaven and impress 5 customers',
    { 'Go to Guitar Center': 1, 'Impressed customers': 5 },
    ['Got Kicked out of Guitar Center'],
    Frequency.Weekly
  ),
  new Quest(
    2,
    'Shopping list',
    'Go to the store and buy 5 items',
    {'Items': 5 },
    ['Food'],
    Frequency.Daily
  ),
  new Quest(
    3,
    'Cookie Monster',
    'Bake and eat a batch of cookies without sharing.',
    { 'Bake cookies': 1, 'Eat all cookies': 1 },
    ['Cookie Monster Badge', 'Sugar Rush'],
    Frequency.Weekly
  ),    
  new Quest(
    4,
    'Talk Like a Pirate',
    'Spend an entire day talking like a pirate.',
    { 'Pirate All Day': 1 },
    ['Pirate Badge', 'Improved Vocabulary'],
    Frequency.Monthly
    ),
  new Quest(
    5,
    'The Floor is Lava',
    'Spend an entire day without touching the floor inside your house.',
    { 'Survive the day': 1 },
    ['Lava Survivor Trophy', 'Improved Agility'],
    Frequency.Once
    ),
]);