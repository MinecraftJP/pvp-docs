Player
######

GET players/:id
---------------

プレイヤーデータを取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/players/:id HTTP/1.1

パラメータ
~~~~~~~~~~


.. csv-table::
   :header: パラメータ, 説明

   fields, レスポンスとして取得したいフィールドを指定します。  |COMMA2| 区切りで複数指定可能です。

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
