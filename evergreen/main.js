/*
 * ----------------------------------------------------------------------------------------------------------------------------------------
 *                                                                                                                                  Raw Data
 * ----------------------------------------------------------------------------------------------------------------------------------------
 */
var statNames = [
    {"name": "Goals Scored", "ref": "goals"},
    {"name": "Goals Assisted", "ref": "assists"},
    {"name": "Goal Involvements", "ref": "goalInvolvements"},
    {"name": "Appearances of 22 Games (2 games unaccounted for)", "ref": "appearances"},
    {"name": "MOTM Votes", "ref": "motmVotes"},
    {"name": "MOTM Wins", "ref": "motmWins"},
    {"name": "Own Goals", "ref": "ownGoals"},
    {"name": "Stab Wounds", "ref": "stabWounds"}
]

/*
 *
 */
//populated in "groupPlayerStatsToPosition"
var positionStats = [];

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
        let data = tempArr[pos] ? tempArr[pos] :  {"name": pos, "goals": 0,"assists": 0, "goalInvolvements": 0, "appearances": 0, "motmVotes": 0, "motmWins": 0, "ownGoals": 0, "yellowCards": 0, "stabWounds": 0 }

        data.goals += player.goals;
        data.assists += player.assists;
        data.goalInvolvements += player.goalInvolvements;
        data.appearances += player.appearances;
        data.motmVotes += player.motmVotes;
        data.motmWins += player.motmWins;
        data.ownGoals += player.ownGoals;
        data.yellowCards += player.yellowCards;
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
    $(tRows[3]).find('td.val').text(player.appearances)
    $(tRows[4]).find('td.val').text(player.motmVotes)
    $(tRows[5]).find('td.val').text(player.motmWins)
    $(tRows[6]).find('td.val').text(player.ownGoals)
    $(tRows[7]).find('td.val').text(player.yellowCards)
    $(tRows[8]).find('td.val').text(player.stabWounds)

}