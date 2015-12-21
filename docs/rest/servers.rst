Server
######

GET servers
-----------

サーバ一覧を取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/servers HTTP/1.1

パラメータ
~~~~~~~~~~

なし

レスポンス
~~~~~~~~~~

.. code-block:: json

   [{
       "id": "51ade1016d9f46031c5cfa52",
       "name": "Sabatora",
       "region": "us",
       "current": 60,
       "max": 64,
       "icon": "diamond sword",
       "order": 100,
       "current_map": "Floating Box 3",
       "next_map": "Snow Crystal",
       "player_count": 66,
       "players": ["Example1", "Example 2"]
   }, {
       "id": "53300f776d9f46031c6c5bbb",
       "name": "TNT",
       "region": "us",
       "current": 9,
       "max": 24,
       "icon": "tnt",
       "order": 1600,
       "current_map": "Wood Stadium",
       "next_map": "Explosive Temple",
       "player_count": 11,
       "players": ["Example3", "Example001"]
   }, {
       "id": "51ad963d6d9f46031c5cfa4f",
       "name": "Lobby",
       "region": "us",
       "current": 0,
       "max": 0,
       "icon": "",
       "order": 0,
       "current_map": "",
       "next_map": "",
       "player_count": 17,
       "players": [", "Example007", "Example1627", "Example14"]
   }]

GET servers/:id
---------------

サーバを取得します。サーバIDを指定可能です。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/servers/:id HTTP/1.1

パラメータ
~~~~~~~~~~

なし

レスポンス
~~~~~~~~~~

.. code-block:: json

   {
       "id": "51ade1016d9f46031c5cfa52",
       "name": "Sabatora",
       "region": "us",
       "current": 60,
       "max": 64,
       "icon": "diamond sword",
       "order": 100,
       "current_map": "Floating Box 3",
       "next_map": "Snow Crystal",
       "player_count": 66,
       "players": ["Example1", "Example 2"]
   }


GET servers/online
------------------

オンライン人数を取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/servers/online HTTP/1.1

パラメータ
~~~~~~~~~~

なし

レスポンス
~~~~~~~~~~

.. code-block:: json

   {
       "count": 123
   }
