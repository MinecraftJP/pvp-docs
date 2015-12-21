Player
######

GET players/:id
---------------

プレイヤーデータを取得します。UUIDまたはプレイヤー名を指定可能です。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/players/:id HTTP/1.1

パラメータ
~~~~~~~~~~


.. csv-table::
   :header: パラメータ, 説明

   fields, レスポンスとして取得したいフィールドを指定します。  |COMMA2| 区切りで複数指定可能です。 ``Optional``

フィールド
~~~~~~~~~~

.. csv-table::
   :header: フィールド, 説明

   bowspleef, BowSpleefゲームモード統計
   cp, CPゲームモード統計
   ctw, CTWゲームモード統計
   factions, Factions統計
   kills, キル、デスエントリー
   matches, ゲーム履歴
   objective, Objectiveゲームモード統計
   paintball, Paintballゲームモード統計
   splatt, Splattゲームモード統計
   teampvp, TeamPvP統計
   total, 全体
   tntrun, TNTRunゲームモード統計


レスポンス
~~~~~~~~~~

.. code-block:: json

   {
       "id": "51aa7e1e6d9f46031c5cf9fa",
       "name": "ayunyan",
       "uuid": "3a97c50f2a564a939d5eb9157cd306d3",
       "last_login": "",
       "last_login_server": "Lobby 1",
       "last_logout": "",
       "banned": false,
       "permalink_url": "https://pvp.minecraft.jp/3a97c50f2a564a939d5eb9157cd306d3"
   }


GET players/:id/punishments
---------------------------

プレイヤーへの処罰一覧を取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/players/:id/punishments HTTP/1.1

パラメータ
~~~~~~~~~~

.. csv-table::
   :header: パラメータ, 説明

   max_id, 指定されたIDより小さいIDのものを返却します。レスポンスとして取得した最後のIDを指定して再度リクエストする事でページングが可能です。 ``Optional``
   limit, 取得するアイテム数を指定します。デフォルト20件、最大100件です。 ``Optional``

レスポンス
~~~~~~~~~~

.. code-block:: json

   [{
       id: "5675f75740620cbaec00834d",
       punisher: null,
       punished: {
           uuid: "1234567890abcdef1234567890abcdef",
           name: "Example"
       },
       state: 0,
       reason: "Compromised Account",
       level: 4,
       time: "2015-12-20T09:33:27.008+09:00",
       type: "ban",
       server: "HipChat",
       automatic: true,
       permalink_url: "https://pvp.minecraft.jp/punishments/5675f75740620cbaec00834d"
   }, {
       id: "5674fda140620c294800834d",
       punisher: null,
       punished: {
           uuid: "1234567890abcdef1234567890abcdef",
           name: "Example"
       },
       state: 0,
       reason: "Compromised Account",
       level: 4,
       time: "2015-12-19T15:48:01.29+09:00",
       type: "ban",
       server: "HipChat",
       automatic: true,
       permalink_url: "https://pvp.minecraft.jp/punishments/5674fda140620c294800834d"
   }, {
       id: "1234567890abcdef01234567",
       punisher: null,
       punished: {
           uuid: "1234567890abcdef1234567890abcdef",
           name: "Example"
       },
       state: 0,
       reason: "Report Spam",
       level: 1,
       time: "2015-12-19T14:42:02.433+09:00",
       type: "punishment",
       server: "Sabatora",
       automatic: false,
       permalink_url: "https://pvp.minecraft.jp/punishments/1234567890abcdef01234567"
   }]
