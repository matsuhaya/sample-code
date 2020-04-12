const recipes = [
  {
    name: 'ベーコンとじゃがいものバター焼き',
    recipeMaterial: [
      'ベーコン',
      'じゃがいも',
      '塩',
      '粗びき黒こしょう',
      'バター',
      'ドライパセリ',
    ],
  },
  {
    name: '鮭ときのこのバタぽんソテー',
    recipeMaterial: [
      '生鮭',
      'しめじ',
      'ポン酢しょう油',
      'バター',
      '塩・胡椒',
      '小麦粉',
      'サラダ油',
      '小葱',
    ],
  },
];

const searchPartialWord = (keyword) => {
  let result = recipes.filter((recipe) => {
    let hasMaterial = false;
    recipe.recipeMaterial.forEach((material) => {
      if (material.includes(keyword)) {
        hasMaterial = true;
      }
    });
    return hasMaterial;
  });
  console.log(`${result.length}件ヒットしました`);

  return result;
};

console.log(searchPartialWord('バター'));
console.log(searchPartialWord('胡椒'));
