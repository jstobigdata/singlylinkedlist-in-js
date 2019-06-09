import LinkedList from './src/LinkedList.js';

function failed(message) {
  console.error(`Failed - ${message}`);
}

function success(message) {
  console.log(`Success - ${message}`);
}

let testLinkedList = new LinkedList();

//Delete first element when the List is empty.
if (testLinkedList.deleteHead()) {
  success(".deleteHead()");
} else {
  failed(".deleteHead()");
}

//add top
testLinkedList.append('firstEle');
testLinkedList.fromArray(['secondle', 3, 4, 5, {
  ele: 6
}]);
testLinkedList.prepend('evenBefore the Down');

testLinkedList.deleteFirst();
testLinkedList.deleteTail();

success(testLinkedList.find(3).toString());

success(testLinkedList.toArray().toString());
success(`List Size: ${testLinkedList.size}`);

testLinkedList.deleteAll();
success(`After empting the List, Size: ${testLinkedList.size}`);