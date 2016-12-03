Maps
####

GET maps
-----------

マップ一覧を取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/maps HTTP/1.1

パラメータ
~~~~~~~~~~

.. csv-table::
  :header: パラメータ, 説明

   playing, playingが指定された場合、データの中にserversが追加されます。usage: playing=1　``Optional``
   gamemode, 指定されたGamemodeのものを返却します。 ``Optional``
   rotation, 指定されたServerのRotationを返却します。 ``Optional``
   max_id, 指定されたIDより小さいIDのものを返却します。レスポンスとして取得した最後のIDを指定して再度リクエストする事でページングが可能です。 ``Optional``
   limit, 取得するアイテム数を指定します。デフォルト20件、最大100件です。 ``Optional``

レスポンス
~~~~~~~~~~

.. code-block:: json

    [{
        "id": "583d6ea8e5bd858068e2aaa7",
        "name": "Cold Bridge",
        "version": "1.0.0",
        "proto": "1.3.0",
        "authors": [{
            "name": "EL36",
            "uuid": "",
            "contribution": ""
        }],
        "objective": "敵を殲滅せよ / Killing your enemy!",
        "teams": [{
                "name": "US",
                "max": 16,
                "color": "DARK_GREEN"
            },
            {
                "name": "SU",
                "max": 16,
                "color": "RED"
            }
        ],
        "gamemodes": [
            "tdm"
        ],
        "type": "pvp",
        "path": "Cold Bridge",
        "has_image": true,
        "permalink_url": "https://pvp.minecraft.jp/maps/583d6ea8e5bd858068e2aaa7"
    }]


レスポンス [playing]
~~~~~~~~~~

.. code-block:: json

    [{
        "id": "582c4381e5bd858068d9e696",
        "name": "Nature",
        "version": "1.0.1",
        "proto": "1.3.3",
        "authors": [{
            "name": "Tamanosuke",
            "uuid": "",
            "contribution": ""
        }],
        "objective": "Annihilate the enemy.",
        "teams": [{
                "name": "Blue Team",
                "max": 8,
                "color": "blue"
            },
            {
                "name": "Red Team",
                "max": 8,
                "color": "red"
            }
        ],
        "gamemodes": [
            "blitz"
        ],
        "type": "pvp",
        "rotations": [
            "Blitz"
        ],
        "path": "blitz/Nature",
        "has_image": true,
        "rates": [{
            "version": "1.0.1",
            "total": 45,
            "rate": 3.3333333,
            "rates": {
                "1": 13,
                "2": 1,
                "3": 7,
                "4": 6,
                "5": 18
            }
        }],
        "servers": [{
            "id": "52760fa76d9f46031c6135aa",
            "name": "Blitz",
            "region": "us",
            "current_map": "Nature",
            "next_map": "Stronghold"
        }],
        "permalink_url": "https://pvp.minecraft.jp/maps/582c4381e5bd858068d9e696"
    }]

GET maps/:id
---------------

マップを取得します。IDまたはマップ名を指定可能です。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/maps/:id HTTP/1.1

パラメータ
~~~~~~~~~~

なし

レスポンス
~~~~~~~~~~

.. code-block:: json

    {
        "id": "563c4a11012ecfdb9b6809a9",
        "name": "Dust",
        "version": "1.0.0",
        "proto": "1.3.0",
        "authors": [{
                "name": "EL36",
                "uuid": "",
                "contribution": ""
            },
            {
                "name": "ayunyan",
                "uuid": "",
                "contribution": ""
            },
            {
                "name": "buraddo",
                "uuid": "",
                "contribution": ""
            }
        ],
        "objective": "他チームのプレイヤーをフラグし、ライフを減らす。 / Fragging other team's player.",
        "teams": [{
                "name": "CT",
                "max": 24,
                "color": "blue"
            },
            {
                "name": "Terroists",
                "max": 24,
                "color": "dark red"
            }
        ],
        "gamemodes": [
            "pb"
        ],
        "type": "pvp",
        "rotations": [
            "Paintball"
        ],
        "path": "paintball/Dust",
        "has_image": true,
        "rates": [{
            "version": "1.0.0",
            "total": 625,
            "rate": 3.5792,
            "rates": {
                "1": 138,
                "2": 31,
                "3": 79,
                "4": 85,
                "5": 292
            }
        }],
        "permalink_url": "https://pvp.minecraft.jp/maps/563c4a11012ecfdb9b6809a9"
    }