function convert(scInfo){
    return {
        "player": [
          {
            "name": scInfo['p1Name'],
            "tag": scInfo['p1Team'],
            "character": scInfo['p1Character'],
            "skin": scInfo['p1Skin'],
            "pron": scInfo['p1Pron']
          },
          {
            "name": scInfo['p2Name'],
            "tag": scInfo['p2Team'],
            "character": scInfo['p2Character'],
            "skin": scInfo['p2Skin'],
            "pron": scInfo['p2Pron']
          },
          {
            "name": "",
            "tag": "",
            "character": "Random",
            "skin": ""
          },
          {
            "name": "",
            "tag": "",
            "character": "Random",
            "skin": ""
          }
        ],
        "teamName": [
          "",
          ""
        ],
        "color": [
            scInfo['p1Color'],
            scInfo['p2Color']
        ],
        "score": [
            scInfo['p1Score'],
            scInfo['p2Score']
        ],
        "wl": [
            scInfo['p1WL'],
            scInfo['p2WL']
        ],
        "bestOf": scInfo['bestOf'],
        "gamemode": 1,
        "round": scInfo['round'],
        "tournamentName": scInfo['tournamentName'],
        "caster": [
          {
            "name": scInfo['caster1Name'],
            "twitter": scInfo['caster1Twitter'],
            "twitch": scInfo['caster1Twitch']
          },
          {
            "name": scInfo['caster2Name'],
            "twitter": scInfo['caster2Twitter'],
            "twitch": scInfo['caster2Twitch']
          }
        ],
        "allowIntro": scInfo['allowIntro'],
        "workshop": false,
        "forceHD": false,
        "noLoAHD": false,
        "forceMM": false
      }
}

