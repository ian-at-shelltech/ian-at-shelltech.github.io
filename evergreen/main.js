/*
 * ----------------------------------------------------------------------------------------------------------------------------------------
 *                                                                                                                                  Raw Data
 * ----------------------------------------------------------------------------------------------------------------------------------------
 */
var statNames = [
    {"name": "Goals Scored", "ref": "goals"},
    {"name": "Goals Assisted", "ref": "assists"},
    {"name": "Goal Involvements", "ref": "goalInvolvements"},
    {"name": "MOTM Votes", "ref": "motmVotes"},
    {"name": "MOTM Wins", "ref": "motmWins"},
    {"name": "Own Goals", "ref": "ownGoals"},
    {"name": "Stab Wounds", "ref": "stabWounds"}
]

/*
 *
 */
var positionStats = [];//populated in "groupPlayerStatsToPosition"

var playerStats = [
    {
      "id": 1,
      "name": "Martin",
      "position": "Defence",
      "goals": 0,
      "assists": 1,
      "goalInvolvements": 1,
      "motmVotes": 7,
      "motmWins": 1,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 2,
      "name": "Elliott",
      "position": "Defence",
      "goals": 0,
      "assists": 0,
      "goalInvolvements": 0,
      "motmVotes": 0,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 3,
      "name": "Mike B",
      "position": "Midfield",
      "goals": 2,
      "assists": 1,
      "goalInvolvements": 3,
      "motmVotes": 16,
      "motmWins": 2,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 4,
      "name": "Tom B",
      "position": "Midfield",
      "goals": 1,
      "assists": 1,
      "goalInvolvements": 2,
      "motmVotes": 20,
      "motmWins": 1,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 5,
      "name": "Rory",
      "position": "Midfield",
      "goals": 0,
      "assists": 0,
      "goalInvolvements": 0,
      "motmVotes": 0,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 6,
      "name": "Andy B",
      "position": "Midfield",
      "goals": 2,
      "assists": 3,
      "goalInvolvements": 5,
      "motmVotes": 35,
      "motmWins": 4,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 7,
      "name": "Jake",
      "position": "Midfield",
      "goals": 1,
      "assists": 2,
      "goalInvolvements": 3,
      "motmVotes": 1,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 8,
      "name": "James C",
      "position": "Midfield",
      "goals": 1,
      "assists": 3,
      "goalInvolvements": 4,
      "motmVotes": 3,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 9,
      "name": "Ben C",
      "position": "Defence",
      "goals": 1,
      "assists": 0,
      "goalInvolvements": 1,
      "motmVotes": 9,
      "motmWins": 1,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 10,
      "name": "Seb",
      "position": "Striker",
      "goals": 19,
      "assists": 9,
      "goalInvolvements": 28,
      "motmVotes": 27,
      "motmWins": 3,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 11,
      "name": "Graham",
      "position": "Midfield",
      "goals": 1,
      "assists": 0,
      "goalInvolvements": 1,
      "motmVotes": 2,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 12,
      "name": "Waz",
      "position": "Goal",
      "goals": 0,
      "assists": 1,
      "goalInvolvements": 1,
      "motmVotes": 25,
      "motmWins": 3,
      "ownGoals": 0,
      "stabWounds": 1
    },
    {
      "id": 13,
      "name": "Brian",
      "position": "Midfield",
      "goals": 1,
      "assists": 2,
      "goalInvolvements": 3,
      "motmVotes": 4,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 14,
      "name": "Sam",
      "position": "Defence",
      "goals": 0,
      "assists": 2,
      "goalInvolvements": 2,
      "motmVotes": 15,
      "motmWins": 1,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 15,
      "name": "Ore",
      "position": "Defence",
      "goals": 1,
      "assists": 4,
      "goalInvolvements": 5,
      "motmVotes": 23,
      "motmWins": 1,
      "ownGoals": 1,
      "stabWounds": 0
    },
    {
      "id": 16,
      "name": "Waqaas",
      "position": "Defence",
      "goals": 0,
      "assists": 0,
      "goalInvolvements": 0,
      "motmVotes": 0,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 17,
      "name": "Ben J",
      "position": "Midfield",
      "goals": 1,
      "assists": 2,
      "goalInvolvements": 3,
      "motmVotes": 0,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 18,
      "name": "Beks",
      "position": "Striker",
      "goals": 8,
      "assists": 2,
      "goalInvolvements": 10,
      "motmVotes": 15,
      "motmWins": 1,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 19,
      "name": "James K",
      "position": "Midfield",
      "goals": 3,
      "assists": 1,
      "goalInvolvements": 4,
      "motmVotes": 4,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 20,
      "name": "Alex",
      "position": "Midfield",
      "goals": 2,
      "assists": 1,
      "goalInvolvements": 3,
      "motmVotes": 18,
      "motmWins": 3,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 21,
      "name": "James M",
      "position": "Midfield",
      "goals": 4,
      "assists": 2,
      "goalInvolvements": 6,
      "motmVotes": 13,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 22,
      "name": "Gareth",
      "position": "Midfield",
      "goals": 2,
      "assists": 2,
      "goalInvolvements": 4,
      "motmVotes": 6,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 23,
      "name": "Tom N",
      "position": "Striker",
      "goals": 1,
      "assists": 0,
      "goalInvolvements": 1,
      "motmVotes": 0,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 24,
      "name": "Harry",
      "position": "Defence",
      "goals": 0,
      "assists": 0,
      "goalInvolvements": 0,
      "motmVotes": 5,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 25,
      "name": "Nando",
      "position": "Midfield",
      "goals": 0,
      "assists": 0,
      "goalInvolvements": 0,
      "motmVotes": 4,
      "motmWins": 1,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 26,
      "name": "Matt P",
      "position": "Defence",
      "goals": 0,
      "assists": 0,
      "goalInvolvements": 0,
      "motmVotes": 0,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 27,
      "name": "Ian",
      "position": "Midfield",
      "goals": 0,
      "assists": 6,
      "goalInvolvements": 6,
      "motmVotes": 22,
      "motmWins": 1,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 28,
      "name": "Matt S",
      "position": "Defence",
      "goals": 0,
      "assists": 0,
      "goalInvolvements": 0,
      "motmVotes": 17,
      "motmWins": 3,
      "ownGoals": 0,
      "stabWounds": 0
    },
    {
      "id": 29,
      "name": "Jon",
      "position": "Midfield",
      "goals": 0,
      "assists": 0,
      "goalInvolvements": 0,
      "motmVotes": 0,
      "motmWins": 0,
      "ownGoals": 0,
      "stabWounds": 0
    }
]



/*
 * ----------------------------------------------------------------------------------------------------------------------------------------
 *                                                                                                                  Page Load Functions
 * ----------------------------------------------------------------------------------------------------------------------------------------
 */

// Menu item click
$('#menu-bar .menu-item').click((e) => {

    //get the clicked menu item
    let activeItem =  $(e.target);

    //update the tab item active class
    $('#menu-bar .menu-item').removeClass('active');
    activeItem.addClass('active')

    //show or hide the correct page section
    let activePage = activeItem.attr('data-tab-name');
    $('.tab-page-wrapper').hide();
    $('.tab-page-wrapper.'+activePage).show();

})

// Select Stat Selection on Team Page
$('#stat-option-select').change((e) => {
    populateTable();
})

// Select Stat Type on Team Page
$('#stat-type-select').change((e) => {
    populateTable();
})

 
$('#player-stat-select').change((e) => {
    populatePlayerTable();
})


/*
 * Page first loaded... populate the table with the "goal" stats
 */
groupPlayerStatsToPosition();
populatePlayerDropdown();

doPopulateTable('goals', 'player');
initialPopulatePlayerTable();

/*
 *
 */
function groupPlayerStatsToPosition() {

    let tempArr = [];

    for(let player of playerStats) {

        let pos = player.position;
        let data = tempArr[pos] ? tempArr[pos] :  {"name": pos, "goals": 0,"assists": 0, "goalInvolvements": 0, "motmVotes": 0, "motmWins": 0, "ownGoals": 0, "stabWounds": 0 }

        data.goals += player.goals;
        data.assists += player.assists;
        data.goalInvolvements += player.goalInvolvements;
        data.motmVotes += player.motmVotes;
        data.motmWins += player.motmWins;
        data.ownGoals += player.ownGoals;
        data.stabWounds += player.stabWounds;
        
        tempArr[pos] = data;

    }

    //move the values from the temp array into the positionStats arr
    for(let key in tempArr) 
        positionStats.push(tempArr[key])
    
}

/*
 *
 */
function populatePlayerDropdown() {

    //sort alphabetically
    playerStats.sort((a, b) => {
        return a.name.localeCompare(b.name); 
    })

    //create a select option for each player
    for(let player of playerStats) {
        let option = $('<option>', { value: player.id, text: player.name})
        $('#player-stat-select').append(option);
    }

}

/*
 * ----------------------------------------------------------------------------------------------------------------------------------------
 *                                                                                                           Populate Team table with stats
 * ----------------------------------------------------------------------------------------------------------------------------------------
 */
function populateTable() {
    doPopulateTable($('#stat-option-select').val(), $('#stat-type-select').val());
}

/*
 *
 */
function doPopulateTable(statName, statType) {

    //get the table body, and remove any existing table rows... we are going to add more
    let tBody = $('#stats-table-body');
    tBody.empty();

    let dataArr = statType == 'player' ? playerStats : positionStats;

    //sort the players according to the stat value
    dataArr.sort((a, b) => {
        let val = b[statName] - a[statName];
        return val != 0 ? val :  a.name.localeCompare(b.name);
    })

    //for each of the players with a non-zero stat value, create a row on the table 
    let rank = 1;
    let index = 1;
    let previousStat = null;
    for(let data of dataArr) {

        //get the stat value for this player, continue to next if it is a 0 value stat
        let stat = data[statName];
        if(stat == 0) continue;

        rank = stat == previousStat ? rank : index;

        let rowHtml = '<tr><td>'+rank+'.</td><td>'+data.name+'</td><td>'+stat+'</td></tr>';
        tBody.append(rowHtml);

        previousStat = stat;
        index++;

    }

    //update the table title to the correct one
    for(let stat of statNames) {
        if(stat.ref == statName) {
            $('#stats-table-title').text(stat.name);
            break;
        }
    }
    

}

/*
 * ----------------------------------------------------------------------------------------------------------------------------------------
 *                                                                                                        Populate Player Section With Stats
 * ----------------------------------------------------------------------------------------------------------------------------------------
 */
function initialPopulatePlayerTable() {

    //sort alphabetically
    playerStats.sort((a, b) => {
        return a.name.localeCompare(b.name); 
    })

    //populate the table with the first player... same as the selected in the input field
    doPopulatePlayerTable(playerStats[0].id);
}

function populatePlayerTable() {
    doPopulatePlayerTable($('#player-stat-select').val())
}

function doPopulatePlayerTable(playerId) {

    //get the individual player from the player stats
    let player = playerStats.find(p => p.id == playerId);

    //update the table title
    $('#player-stat-table-title').text(player.name)

    //update the correct rows
    let tRows = $('#player-stat-table tbody tr');
    $(tRows[0]).find('td.val').text(player.goals)
    $(tRows[1]).find('td.val').text(player.assists)
    $(tRows[2]).find('td.val').text(player.goalInvolvements)
    $(tRows[3]).find('td.val').text(player.motmVotes)
    $(tRows[4]).find('td.val').text(player.motmWins)
    $(tRows[5]).find('td.val').text(player.ownGoals)
    $(tRows[6]).find('td.val').text(player.stabWounds)

}