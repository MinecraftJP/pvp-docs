Match
#####

GET matches
-----------

ゲーム結果一覧を取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/matches HTTP/1.1

パラメータ
~~~~~~~~~~

.. csv-table::
   :header: パラメータ, 説明

   max_id, 指定されたIDより小さいIDのものを返却します。レスポンスとして取得した最後のIDを指定して再度リクエストする事でページングが可能です。 ``Optional``
   limit, 取得するアイテム数を指定します。デフォルト20件、最大100件です。 ``Optional``
   fields, レスポンスとして取得したいフィールドを指定します。  |COMMA2| 区切りで複数指定可能です。 ``Optional``

フィールド
~~~~~~~~~~

.. csv-table::
   :header: フィールド, 説明

   teams, チーム
   objectives, オブジェクティブ

レスポンス
~~~~~~~~~~

.. code-block:: json

   [{
       "id": "5676213f10ecbbf0a083d5ad",
       "map": "Lava TNT",
       "server": "TNT",
       "gamemode": "bowspleef",
       "ranked": true,
       "win": "",
       "kill_count": 0,
       "death_count": 4,
       "started": "2015-12-20T12:32:42.587+09:00",
       "finished": "2015-12-20T12:37:01.576+09:00",
       "permalink_url": "https://pvp.minecraft.jp/matches/5676213f10ecbbf0a083d5ad"
   }, {
       "id": "567620b410ecbbf0a083d5ac",
       "map": "TNT Temple",
       "server": "TNT",
       "gamemode": "tntrun",
       "ranked": true,
       "win": "",
       "kill_count": 0,
       "death_count": 4,
       "started": "2015-12-20T12:30:13.962+09:00",
       "finished": "2015-12-20T12:31:55.422+09:00",
       "permalink_url": "https://pvp.minecraft.jp/matches/567620b410ecbbf0a083d5ac"
   }, {
       "id": "567620a610ec167c184ea6ec",
       "map": "Floating Box 3",
       "server": "Sabatora",
       "gamemode": "ctw",
       "ranked": true,
       "win": "Red Team",
       "kill_count": 55,
       "death_count": 70,
       "started": "2015-12-20T12:29:59.257+09:00",
       "finished": "2015-12-20T12:37:57.237+09:00",
       "permalink_url": "https://pvp.minecraft.jp/matches/567620a610ec167c184ea6ec"
   }, {
       "id": "5676204b513a67f9f3742f39",
       "map": "Splatt Garden",
       "server": "Splatt 2",
       "gamemode": "splatt",
       "ranked": true,
       "win": "Lime Team",
       "kill_count": 63,
       "death_count": 63,
       "started": "2015-12-20T12:28:30.589+09:00",
       "finished": "2015-12-20T12:33:30.827+09:00",
       "permalink_url": "https://pvp.minecraft.jp/matches/5676204b513a67f9f3742f39"
   }]

GET matches/:id
---------------

ゲーム結果を取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/matches/:id HTTP/1.1

パラメータ
~~~~~~~~~~

.. csv-table::
   :header: パラメータ, 説明

   fields, レスポンスとして取得したいフィールドを指定します。  |COMMA2| 区切りで複数指定可能です。 ``Optional``

フィールド
~~~~~~~~~~

.. csv-table::
   :header: フィールド, 説明

   teams, チーム
   objectives, オブジェクティブ

レスポンス
~~~~~~~~~~

.. code-block:: json

   {
       "id": "56761ef7513a67f9f3742f31",
       "map": "End Splatoon",
       "server": "Splatt 2",
       "gamemode": "splatt",
       "ranked": true,
       "win": "Purple Team",
       "kill_count": 37,
       "death_count": 37,
       "started": "2015-12-20T12:22:50.637+09:00",
       "finished": "2015-12-20T12:27:50.923+09:00",
       "teams": [{
           "name": "Lime Team",
           "score": 0,
           "kill_count": 28,
           "death_count": 9,
           "players": [{
               "uuid": "1234567890abcdef1234567890abcdef",
               "name": "Example1",
               "score": 0,
               "kill_count": 7,
               "death_count": 1,
               "shot_count": 0,
               "hit_count": 8,
               "paint_count": 1636
           }, {
               "uuid": "1234567890abcdef1234567890abcdef",
               "name": "Example2",
               "score": 0,
               "kill_count": 1,
               "death_count": 0,
               "shot_count": 0,
               "hit_count": 19,
               "paint_count": 1544
           }]
       }, {
           "name": "Purple Team",
           "score": 0,
           "kill_count": 9,
           "death_count": 28,
           "players": [{
               "uuid": "1234567890abcdef1234567890abcdef2",
               "name": "Example3",
               "score": 0,
               "kill_count": 0,
               "death_count": 4,
               "shot_count": 0,
               "hit_count": 7,
               "paint_count": 2437
           }, {
               "uuid": "1234567890abcdef1234567890abcdef",
               "name": "Example4",
               "score": 0,
               "kill_count": 1,
               "death_count": 7,
               "shot_count": 0,
               "hit_count": 28,
               "paint_count": 1795
           }]
       }],
       "permalink_url": "https://pvp.minecraft.jp/matches/56761ef7513a67f9f3742f31"
   }