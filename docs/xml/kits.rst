キット
======

キットは主にスポーン時などにアイテムやポーション効果を付与するために使用されます。アイテムの設定方法については :doc:`items </xml/items>` 、ポーション効果の設定方法については :doc:`potions </xml/potions>` をご覧ください。

各 ``<kit>`` ノードは ``parents`` 属性に他のキットのIDを指定する事でアイテムやポーション効果を継承する事が出来ます。

.. code-block:: xml

   <kits>
       <kit id="spawn">
           <item slot="0">iron sword</item>
           <item slot="1">bow</item>
           <item slot="2" amount="64">log</item>
           <item slot="3" amount="3">diamond</item>
           <item slot="9" amount="64">arrow</item>
       </kit>
       <kit id="red" parents="spawn">
           <chestplate color="cd0000" damage="-3000">leather chestplate</chestplate>
           <leggings color="cd0000" damage="-3000">leather leggings</leggings>
           <boots color="cd0000" damage="-3000">leather boots</boots>
       </kit>
       <kit id="blue" parents="spawn">
           <chestplate color="0066cc" damage="-3000">leather chestplate</chestplate>
           <leggings color="0066cc" damage="-3000">leather leggings</leggings>
           <boots color="0066cc" damage="-3000">leather boots</boots>
       </kit>
   </kits>


<kit>ノードの属性
^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10, 80, 10

   ``id``, ``必須`` キットをXMLやスクリプトから指定する時の名前です。, 文字列
   ``parents``, 継承元の親キットIDです。半角スペース区切りで複数指定出来ます。, 文字列

