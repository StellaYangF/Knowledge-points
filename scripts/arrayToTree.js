const arr = [
  '/diskC/folderA/test_file',
  '/diskC/folderA/sub_folderX/file1',
  '/diskKH/folderA/test_file',
  '/diskC/folderB/folderC/fileX',
]

// transfer arr to following dataTree
transferredArr = [
  { Name: 'diskC', children: [
    { Name: 'folderA', children: [
      { Name: 'test_file' },
      { Name: 'sub_folderX', children: [
        { Name: 'file1' }
      ] }
    ] }, 
    { Name: 'folderB', children: [
      { Name: 'folderC', children: [
        { Name: 'fileX' }
      ] }
    ] }
  ] }, 
  { Name: 'diskKH', children: [
    { Name: 'folderA', children: [
      { Name: 'test_file' }
    ] }
  ] }
];

class Tree {
  constructor(name, children) {
    this.children = children;
  }
}

 
arr.reduce(item => item.split('/').slice(1))