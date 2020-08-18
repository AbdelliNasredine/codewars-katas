// kata link: https://www.codewars.com/kata/57c178e16662d0d932000120
function table(results) {
  // regex
  const regex = /([\d-]+):([\d-]+)\s(.+)\s-\s(.+)/i;
  // teams list
  let team_names = {};
  let teams_table = [];
  let team_template = {
    name: "",
    win: 0,
    tie: 0,
    lost: 0,
    total: 0,
    goals_shot: 0,
    goals_gotten: 0,
    points: 0,
    same: false,
    toString: function () {
      console.log(`${this.name}`);
    },
  };

  for (const line of results) {
    // extracting match information
    const sr = regex.exec(line);
    const left_team_score = sr[1];
    const right_team_score = sr[2];
    const left_team = sr[3];
    const right_team = sr[4];

    // checking if both teams already seen
    if (!team_names.hasOwnProperty(left_team)) {
      teams_table.push({
        ...team_template,
        name: left_team,
      });
      team_names[left_team] = teams_table.length - 1;
    }
    if (!team_names.hasOwnProperty(right_team)) {
      teams_table.push({
        ...team_template,
        name: right_team,
      });
      team_names[right_team] = teams_table.length - 1;
    }

    // check if match is played
    if (left_team_score != "-" || right_team_score != "-") {
      const rt_obj = teams_table[team_names[right_team]];
      const lt_obj = teams_table[team_names[left_team]];
      // increment match played for both teams
      lt_obj.total += 1;
      rt_obj.total += 1;

      // calculate win/lost/tie based of
      // difference on score
      const diff = left_team_score - right_team_score;

      // Differences of goals (shot vs. gotten)
      // left team
      lt_obj.goals_shot += Number(left_team_score);
      lt_obj.goals_gotten += Number(right_team_score);
      // right team
      rt_obj.goals_shot += Number(right_team_score);
      rt_obj.goals_gotten += Number(left_team_score);

      if (diff < 0) {
        // right is winner , left loser
        lt_obj.lost += 1;
        rt_obj.win += 1;
        rt_obj.points += 3;
      } else if (diff > 0) {
        // right is loser , left winner
        lt_obj.win += 1;
        rt_obj.lost += 1;
        lt_obj.points += 3;
      } else {
        // its a tie
        rt_obj.tie += 1;
        lt_obj.tie += 1;
        rt_obj.points += 1;
        lt_obj.points += 1;
      }
    }
  }

  // stuck on sorting
  // ordering table
  teams_table.sort(function (t1, t2) {
    // by points
    if (t1.points > t2.points) return -1;
    else if (t1.points < t2.points) return 1;
    else {
      // by diff in goals
      const d1 = t1.goals_shot - t1.goals_gotten;
      const d2 = t2.goals_shot - t2.goals_gotten;
      if (d1 > d2) return -1;
      else if (d1 < d2) return 1;
      else {
        // by more goals better
        const g1 = t1.goals_shot + t1.goals_gotten;
        const g2 = t2.goals_shot + t2.goals_gotten;
        if (g1 > g2) return -1;
        else if (g1 < g2) return 1;
        else {
          // make them same
          t1.same = true;
          t2.same = true;
          // order by name
          if (t1.name > t2.name) return -1;
          else if (t1.name < t2.name) return 1;
          else return 0;
        }
      }
    }
  });

  teams_table.forEach((t) => t.toString());
  return;

  // const team_formatted = `${t.concat(" ".repeat(30 - t.length))}${
  //   teams[t].total
  // }  ${teams[t].win}  ${teams[t].lost}  ${teams[t].total}  ${teams[
  //   t
  // ].goals.join(":")}  ${teams[t].points}`;

  console.log(table);
}

// Testing
const results = [
  "6:0 FC Bayern Muenchen - Werder Bremen",
  "-:- Eintracht Frankfurt - Schalke 04",
  "-:- FC Augsburg - VfL Wolfsburg",
  "-:- Hamburger SV - FC Ingolstadt",
  "-:- 1. FC Koeln - SV Darmstadt",
  "-:- Borussia Dortmund - FSV Mainz 05",
  "-:- Borussia Moenchengladbach - Bayer Leverkusen",
  "-:- Hertha BSC Berlin - SC Freiburg",
  "-:- TSG 1899 Hoffenheim - RasenBall Leipzig",
];

const expected =
  " 1. FC Bayern Muenchen            1  1  0  0  6:0  3\n" +
  " 2. 1. FC Koeln                   0  0  0  0  0:0  0\n" +
  " 2. Bayer Leverkusen              0  0  0  0  0:0  0\n" +
  " 2. Borussia Dortmund             0  0  0  0  0:0  0\n" +
  " 2. Borussia Moenchengladbach     0  0  0  0  0:0  0\n" +
  " 2. Eintracht Frankfurt           0  0  0  0  0:0  0\n" +
  " 2. FC Augsburg                   0  0  0  0  0:0  0\n" +
  " 2. FC Ingolstadt                 0  0  0  0  0:0  0\n" +
  " 2. FSV Mainz 05                  0  0  0  0  0:0  0\n" +
  " 2. Hamburger SV                  0  0  0  0  0:0  0\n" +
  " 2. Hertha BSC Berlin             0  0  0  0  0:0  0\n" +
  " 2. RasenBall Leipzig             0  0  0  0  0:0  0\n" +
  " 2. SC Freiburg                   0  0  0  0  0:0  0\n" +
  " 2. Schalke 04                    0  0  0  0  0:0  0\n" +
  " 2. SV Darmstadt                  0  0  0  0  0:0  0\n" +
  " 2. TSG 1899 Hoffenheim           0  0  0  0  0:0  0\n" +
  " 2. VfL Wolfsburg                 0  0  0  0  0:0  0\n" +
  "18. Werder Bremen                 1  0  0  1  0:6  0";

// execution
table(results);
