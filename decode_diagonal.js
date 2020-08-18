// kata link : https://www.codewars.com/kata/55af0d33f9b829d0a800008d/train/javascript
function getDiagonalCode(grid) {
  // 1- iterate over each line
  //  of grid diagonally (doing down)
  // 2- each iteration do bound check
  // 2a- if reach last line go back to
  //   previous line's next column
  // 2b - if reach end of line char '/n'
  //    but not last line go to next line's column
  grid = grid.split("\n");
  let row = 0,
    col = 0,
    decoded = "";
  console.log(grid);
  while (row < grid.length) {
    decoded += grid[row].charAt(col);
    console.log(
      `grid[${row}] = ${
        grid[row]
      } , row = ${row}, col = ${col}, grid[${row}][${col}] = ${grid[row].charAt(
        col
      )}`
    );
    row++;
    col = row * 2;
  }
}

// testing grid:
const g1 =
  "H Z R R Q \n" +
  "D I F C A E A ! \n" +
  "G H T E L A E \n" +
  "L M N H P R F \n" +
  "X Z R P E";
const g2 =
  "C \n" +
  "D o F C A E A s ! \n" +
  "G H d E L A r \n" +
  "L M N e P a F \n" +
  "X Z R P W";

getDiagonalCode(g1);
