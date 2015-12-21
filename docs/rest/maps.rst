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

   max_id, 指定されたIDより小さいIDのものを返却します。レスポンスとして取得した最後のIDを指定して再度リクエストする事でページングが可能です。 ``Optional``
   limit, 取得するアイテム数を指定します。デフォルト20件、最大100件です。 ``Optional``

レスポンス
~~~~~~~~~~

.. code-block:: json

   [{
       "id": "563c4a11012ecfdb9b680969",
       "name": "Strafight",
       "proto": "1.3.3",
       "version": "1.1.3",
       "authors": [{
           "name": "tossy_XD",
           "contribution": ""
       }],
       "contributors": [],
       "teams": [{
           "name": "Green Team",
           "max": 24,
           "color": "dark green"
       }, {
           "name": "Purple Team",
           "max": 24,
           "color": "dark purple"
       }],
       "gamemodes": [
           "ctw"
       ],
       "type": "pvp"
   }, {
       "id": "563c4a11012ecfdb9b6809a9",
       "name": "Dust",
       "proto": "1.3.0",
       "version": "1.0.0",
       "authors": [{
           "name": "EL36",
           "contribution": ""
       }, {
           "name": "ayunyan",
           "contribution": ""
       }, {
           "name": "buraddo",
           "contribution": ""
       }],
       "contributors": [],
       "teams": [{
           "name": "CT",
           "max": 24,
           "color": "blue"
       }, {
           "name": "Terroists",
           "max": 24,
           "color": "dark red"
       }],
       "gamemodes": ["pb"],
       "type": "pvp"
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
       "proto": "1.3.0",
       "version": "1.0.0",
       "authors": [{
           "name": "EL36",
           "contribution": ""
       }, {
           "name": "ayunyan",
           "contribution": ""
       }, {
           "name": "buraddo",
           "contribution": ""
       }],
       "contributors": [],
       "teams": [{
           "name": "CT",
           "max": 24,
           "color": "blue"
       }, {
           "name": "Terroists",
           "max": 24,
           "color": "dark red"
       }],
       "gamemodes": ["pb"],
       "type": "pvp"
   }