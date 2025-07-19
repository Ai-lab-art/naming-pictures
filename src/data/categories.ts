// Import sample images
import lionImg from "@/assets/items/lion.jpg";
import tigerImg from "@/assets/items/tiger.jpg";
import elephantImg from "@/assets/items/elephant.jpg";
import giraffeImg from "@/assets/items/giraffe.jpg";
import zebraImg from "@/assets/items/zebra.jpg";
import dogImg from "@/assets/items/dog.jpg";
import catImg from "@/assets/items/cat.jpg";
import horseImg from "@/assets/items/horse.jpg";
import cowImg from "@/assets/items/cow.jpg";
import eagleImg from "@/assets/items/eagle.jpg";
import parrotImg from "@/assets/items/parrot.jpg";
import swanImg from "@/assets/items/swan.jpg";
import appleImg from "@/assets/items/apple.jpg";
import bananaImg from "@/assets/items/banana.jpg";
import orangeImg from "@/assets/items/orange.jpg";
import butterflyImg from "@/assets/items/butterfly.jpg";
import beeImg from "@/assets/items/bee.jpg";
import ladybugImg from "@/assets/items/ladybug.jpg";
import roseImg from "@/assets/items/rose.jpg";
import tulipImg from "@/assets/items/tulip.jpg";
import whaleImg from "@/assets/items/whale.jpg";
import dolphinImg from "@/assets/items/dolphin.jpg";

export interface CategoryItem {
  id: string;
  name: string;
  image?: string;
}

export interface Category {
  title: string;
  items: CategoryItem[];
}

export const wildAnimals: CategoryItem[] = [
  { id: '1', name: 'Lion', image: lionImg },
  { id: '2', name: 'Tiger', image: tigerImg },
  { id: '3', name: 'Elephant', image: elephantImg },
  { id: '4', name: 'Giraffe', image: giraffeImg },
  { id: '5', name: 'Zebra', image: zebraImg },
  { id: '6', name: 'Cheetah' },
  { id: '7', name: 'Leopard' },
  { id: '8', name: 'Rhinoceros' },
  { id: '9', name: 'Hippopotamus' },
  { id: '10', name: 'Gorilla' },
  { id: '11', name: 'Chimpanzee' },
  { id: '12', name: 'Orangutan' },
  { id: '13', name: 'Wolf' },
  { id: '14', name: 'Bear' },
  { id: '15', name: 'Fox' },
  { id: '16', name: 'Deer' },
  { id: '17', name: 'Moose' },
  { id: '18', name: 'Bison' },
  { id: '19', name: 'Kangaroo' },
  { id: '20', name: 'Koala' },
];

export const domesticAnimals: CategoryItem[] = [
  { id: '1', name: 'Dog', image: dogImg },
  { id: '2', name: 'Cat', image: catImg },
  { id: '3', name: 'Horse', image: horseImg },
  { id: '4', name: 'Cow', image: cowImg },
  { id: '5', name: 'Pig' },
  { id: '6', name: 'Sheep' },
  { id: '7', name: 'Goat' },
  { id: '8', name: 'Chicken' },
  { id: '9', name: 'Duck' },
  { id: '10', name: 'Goose' },
  { id: '11', name: 'Turkey' },
  { id: '12', name: 'Rabbit' },
  { id: '13', name: 'Guinea Pig' },
  { id: '14', name: 'Hamster' },
  { id: '15', name: 'Ferret' },
  { id: '16', name: 'Llama' },
  { id: '17', name: 'Alpaca' },
  { id: '18', name: 'Donkey' },
  { id: '19', name: 'Mule' },
  { id: '20', name: 'Pony' },
];

export const birds: CategoryItem[] = [
  { id: '1', name: 'Eagle', image: eagleImg },
  { id: '2', name: 'Hawk' },
  { id: '3', name: 'Owl' },
  { id: '4', name: 'Falcon' },
  { id: '5', name: 'Parrot', image: parrotImg },
  { id: '6', name: 'Peacock' },
  { id: '7', name: 'Swan' },
  { id: '8', name: 'Flamingo' },
  { id: '9', name: 'Penguin' },
  { id: '10', name: 'Ostrich' },
  { id: '11', name: 'Hummingbird' },
  { id: '12', name: 'Cardinal' },
  { id: '13', name: 'Blue Jay' },
  { id: '14', name: 'Robin' },
  { id: '15', name: 'Sparrow' },
  { id: '16', name: 'Crow' },
  { id: '17', name: 'Raven' },
  { id: '18', name: 'Woodpecker' },
  { id: '19', name: 'Kingfisher' },
  { id: '20', name: 'Pelican' },
];

export const fruits: CategoryItem[] = [
  { id: '1', name: 'Apple', image: appleImg },
  { id: '2', name: 'Banana', image: bananaImg },
  { id: '3', name: 'Orange', image: orangeImg },
  { id: '4', name: 'Grape' },
  { id: '5', name: 'Strawberry' },
  { id: '6', name: 'Blueberry' },
  { id: '7', name: 'Raspberry' },
  { id: '8', name: 'Blackberry' },
  { id: '9', name: 'Pineapple' },
  { id: '10', name: 'Mango' },
  { id: '11', name: 'Peach' },
  { id: '12', name: 'Pear' },
  { id: '13', name: 'Cherry' },
  { id: '14', name: 'Plum' },
  { id: '15', name: 'Watermelon' },
  { id: '16', name: 'Cantaloupe' },
  { id: '17', name: 'Kiwi' },
  { id: '18', name: 'Papaya' },
  { id: '19', name: 'Avocado' },
  { id: '20', name: 'Coconut' },
];

export const insects: CategoryItem[] = [
  { id: '1', name: 'Butterfly', image: butterflyImg },
  { id: '2', name: 'Bee', image: beeImg },
  { id: '3', name: 'Ant' },
  { id: '4', name: 'Ladybug', image: ladybugImg },
  { id: '5', name: 'Dragonfly' },
  { id: '6', name: 'Grasshopper' },
  { id: '7', name: 'Cricket' },
  { id: '8', name: 'Beetle' },
  { id: '9', name: 'Moth' },
  { id: '10', name: 'Firefly' },
  { id: '11', name: 'Wasp' },
  { id: '12', name: 'Mosquito' },
  { id: '13', name: 'Fly' },
  { id: '14', name: 'Spider' },
  { id: '15', name: 'Scorpion' },
  { id: '16', name: 'Mantis' },
  { id: '17', name: 'Cicada' },
  { id: '18', name: 'Aphid' },
  { id: '19', name: 'Termite' },
  { id: '20', name: 'Centipede' },
];

export const flowers: CategoryItem[] = [
  { id: '1', name: 'Rose', image: roseImg },
  { id: '2', name: 'Tulip', image: tulipImg },
  { id: '3', name: 'Sunflower' },
  { id: '4', name: 'Daisy' },
  { id: '5', name: 'Lily' },
  { id: '6', name: 'Orchid' },
  { id: '7', name: 'Carnation' },
  { id: '8', name: 'Daffodil' },
  { id: '9', name: 'Iris' },
  { id: '10', name: 'Peony' },
  { id: '11', name: 'Hibiscus' },
  { id: '12', name: 'Jasmine' },
  { id: '13', name: 'Lavender' },
  { id: '14', name: 'Marigold' },
  { id: '15', name: 'Pansy' },
  { id: '16', name: 'Petunia' },
  { id: '17', name: 'Poppy' },
  { id: '18', name: 'Violet' },
  { id: '19', name: 'Zinnia' },
  { id: '20', name: 'Chrysanthemum' },
];

export const seaAnimals: CategoryItem[] = [
  { id: '1', name: 'Whale', image: whaleImg },
  { id: '2', name: 'Dolphin', image: dolphinImg },
  { id: '3', name: 'Shark' },
  { id: '4', name: 'Octopus' },
  { id: '5', name: 'Jellyfish' },
  { id: '6', name: 'Seahorse' },
  { id: '7', name: 'Starfish' },
  { id: '8', name: 'Crab' },
  { id: '9', name: 'Lobster' },
  { id: '10', name: 'Shrimp' },
  { id: '11', name: 'Sea Turtle' },
  { id: '12', name: 'Seal' },
  { id: '13', name: 'Sea Lion' },
  { id: '14', name: 'Walrus' },
  { id: '15', name: 'Otter' },
  { id: '16', name: 'Stingray' },
  { id: '17', name: 'Swordfish' },
  { id: '18', name: 'Tuna' },
  { id: '19', name: 'Salmon' },
  { id: '20', name: 'Barracuda' },
];

export const categoryData: Record<string, CategoryItem[]> = {
  'Wild Animals': wildAnimals,
  'Domestic Animals': domesticAnimals,
  'Birds': birds,
  'Fruits': fruits,
  'Insects': insects,
  'Flowers': flowers,
  'Sea Animals': seaAnimals,
};