ショップ
========

特定のアイテムを通貨としてアイテムを購入出来るショップを作成します。 ショップは看板を叩くことで利用可能です。

マップ内にショップを作成するには下記の形式で看板を設置します。

.. code-block:: none

   1行目: [Shop]
   2行目: 名前(前方一致)

.. code-block:: xml

   <shops>
     <shop name="Weapon Shop">
       <item price="gold ingot,1" slot="4">iron sword</item>
       <item price="gold ingot,1" slot="5">bow</item>
     </shop>
   </shops>

<shop>ノードの属性
^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値

   ``name``, ショップの名前です。localesノードにより多言語化可能です。, String
   ``filter``, ショップ利用時にチェックされるフィルターです。フィルターによりブロックされた場合はショップが利用出来ません。	:doc:`Filter Name </xml/filters>`
   ``filter-message``, フィルター適用時に表示されるメッセージです。, String

<item>ノードの属性
^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: ノード, 説明, 値

   ``price``, このアイテムの価格を ``material,必要数`` の形式で記入します。, Price String
   ``slot``, ショップウィンドウ内のアイテム位置です。, Number
   ``filter``, アイテム単位のフィルターです。フィルターによりブロックされた場合はアイテムが表示されません。	:doc:`Filter Name </xml/filters>`

