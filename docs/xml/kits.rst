キット
======

キットは主にスポーン時などにアイテムやポーション効果を付与するために使用されます。アイテムの設定方法については :doc:`items </xml/items>` 、ポーション効果の設定方法については :doc:`potions </xml/potions>` をご覧ください。

各 ``<kit>`` ノードは ``parents`` 属性に他のキットの名前を指定する事でアイテムやポーション効果を継承する事が出来ます。

.. code-block:: xml

   <kits>
       <kit name="spawn">
           <item slot="0">iron sword</item>
           <item slot="1">bow</item>
           <item slot="2" amount="64">log</item>
           <item slot="3" amount="3">diamond</item>
           <item slot="9" amount="64">arrow</item>
       </kit>
       <kit name="red" parents="spawn">
           <chestplate color="cd0000" damage="-3000">leather chestplate</chestplate>
           <leggings color="cd0000" damage="-3000">leather leggings</leggings>
           <boots color="cd0000" damage="-3000">leather boots</boots>
       </kit>
       <kit name="blue" parents="spawn">
           <chestplate color="0066cc" damage="-3000">leather chestplate</chestplate>
           <leggings color="0066cc" damage="-3000">leather leggings</leggings>
           <boots color="0066cc" damage="-3000">leather boots</boots>
       </kit>
   </kits>


<kit>ノードの属性
^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明
   :widths: 20,80

   ``name``, キット名です。
   ``parents``, 継承元の親キット名です。半角スペース区切りで複数指定出来ます。

