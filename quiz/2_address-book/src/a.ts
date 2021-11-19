// 프로그램이 추론이 가능한 코드
function fetchItems(): string[] {
    let items = ['a', 'b', 'c'];
    return items;
}

fetchItems();

// 추론이 불가능한 코드: Promise => generic으로 해야함.
function fetchItems2(): Promise<string[]> {
    let items: string[] = ['a', 'b', 'c'];
    return new Promise(function(resolve) {
        resolve(items);
    })
}

fetchItems2()