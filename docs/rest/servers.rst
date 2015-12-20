Server
######

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
