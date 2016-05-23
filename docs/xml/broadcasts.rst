メッセージブロードキャスト
==========================

``<broadcasts>``ノードで一定の時間毎に送信するメッセージを作成する事が出来ます。メッセージは``<locales>``ノードにより多言語化可能です。

.. code-block:: xml

   <broadcasts>
       <tip after="10s">ゲーム開始後10秒で表示されるTIPメッセージ</tip>
       <alert after="15m">ゲーム開始後15分で表示されるアラートメッセージ</alert>
       <tip after="5m" every="1m" count="5">ゲーム開始後5分~10分まで1分ごとに表示されるメッセージ</tip>
   </broadcasts>

<alert>、<tip>ノードの属性
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: ノード, 説明, 値
   :widths: 10,80,10

   ``after``, ``必須`` メッセージを表示する経過時間, :doc:`TimePeriod </data/timeperiod>`
   ``every``, メッセージの表示間隔, :doc:`TimePeriod </data/timeperiod>`
   ``count``, メッセージの表示回数, 整数
   ``filter``, メッセージ表示対象フィルター, :doc:`Filter </xml/filters>`

