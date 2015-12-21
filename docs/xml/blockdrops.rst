ブロック破壊時のドロップ制御
============================

``<blockdrops>`` ノードを定義する事により、ブロック破壊時の挙動を変更する事が出来ます。

.. code-block:: xml

   <blockdrops>
     <!-- ルール (複数可) -->
     <rule>
       <!--
       ルールを適用するリージョン (任意,複数可)
       -->
       <region>
           <rectangle min="10,50" max="-50,-10"/>
       </region>
       <!--
       フィルター (必須,複数可)
       -->
       <filter>
           <block>iron ore</block>
           <block>iron block</block>
       </filter>
       <!--
       ブロック破壊時にドロップするアイテム(任意,複数可)
       指定しない場合はドロップなし
       -->
       <drops>
           <item>iron ingot</item>
       </drops>
       <!--
       ブロック破壊時に置換するブロック(任意)
       -->
       <replacement>stone</replacement>
       <!--
       ブロック破壊時にドロップする経験値(任意)
       -->
       <experience>10</experience>
     </rule>
   </blockdrops>

<rule>ノードの子要素
^^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: ノード, 説明, 値
   :widths: 10,80,10

   ``<region>``, ルール適用対象のリージョン, :doc:`Region </xml/regions>`
   ``<filter>``, ルール適用対象ブロックのフィルター, :doc:`Filter </xml/filters>`
   ``<drops>``, ドロップするアイテム(複数指定可能です。), :doc:`Item </xml/items>`
   ``<experience>``, ドロップする経験値, Number
   ``<replacement>``, ブロックの破壊後に置換するブロック, :doc:`Material </data/material>`
   ``<direct>``, trueの場合ドロップアイテム、経験値を直接プレイヤーのインベントリにいれます。, Boolean
   ``<wrongtool>``, trueの場合ブロックに対する適正ツールではない場合もアイテムをドロップします。, Boolean
   ``<restore-time>``, 指定されている場合、一定時間後にブロックを元に戻します。, :doc:`TimePeriod </data/timeperiod>`
   ``<grow>``, <restore-time>によるブロック復元時に成長可能なブロックの場合は段階的に成長します。(現在は小麦のみ対応), Boolean
   ``<fall-chance>``, ブロックの爆発時に爆発デブリになる確率, Number (0-1.0)
   ``<land-chance>``, デブリが地面に付いたときにブロックに戻る確率, Number (0-1.0)
   ``<fall-speed>``, デブリの飛散速度, Number


使用例: https://www.youtube.com/watch?v=6nT8cpMhVuk
