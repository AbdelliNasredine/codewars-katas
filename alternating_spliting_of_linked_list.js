const assert = require("assert");
function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  let cNode,
    fListH,
    sListH,
    fListIdx,
    sListIdx,
    i = 0;

  if (head == null) throw new Error("error");

  if (head.next == null) throw new Error("error");

  while (head != null) {
    cNode = new Node(head.data);
    if (i == 0) {
      fListH = cNode;
      fListIdx = fListH;
    } else if (i == 1) {
      sListH = cNode;
      sListIdx = sListH;
    } else if (i % 2 == 0) {
      fListIdx.next = cNode;
      fListIdx = fListIdx.next;
    } else {
      sListIdx.next = cNode;
      sListIdx = sListIdx.next;
    }
    i++;
    head = head.next;
  }

  return new Context(fListH, sListH);
}

// Testing functions:

function runAndTest() {
  let tList = new Node(1);
  tList.next = new Node(2);
  tList.next.next = new Node(3);
  // printing the list
  // print(tList);
  // splitting the list
  const result = alternatingSplit(tList);
  print(result.first);
  console.log("-----");
  print(result.second);
}

function print(list) {
  while (list != null) {
    console.log(list.data);
    list = list.next;
  }
}

runAndTest();
