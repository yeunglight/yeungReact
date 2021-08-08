
type Item = {
	value?: string,
	next?: null | Object
}
export class Test {
	result: any = {};
	main() {
		var arr = ['1', '2', '3'];
		const arr1 = arr.reverse();
		arr1.forEach((value, index) => {
			if (index === 0) {
				this.result = { value, next: null };
			} else {
				this.result = { value, next: this.result };
			}
		})
	}

	insert(key: string) {
		let currentItem = this.result;
		if (currentItem.value === undefined || currentItem.value === null) {
			currentItem = { value: key, next: null }
		} else {
			while (currentItem.next) {
				currentItem = currentItem.next;
			}
			currentItem.next = { value: key, next: null };
		}
		return this.result;
	}

	insertSomeKey(insertValue: string, preValue: string) {
		let currentItem = this.result;
		let nextItem = {};
		while (currentItem.next && currentItem.value !== preValue) {
			currentItem = currentItem.next;
		}
		// 将currentItem.next的引用地址保存下来
		nextItem = currentItem.next;
		// 这里只是修改了  currentItem.next 的引用地址 
		currentItem.next = { value: insertValue, next: nextItem };
		console.log(this.result);
	}

}
const test1 = new Test();
test1.main();
test1.insert('amy');
test1.insertSomeKey('bobo', 'amy');