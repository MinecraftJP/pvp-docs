スコアボックス
==============

スコアボックスは指定されたリージョン内にプレイヤーが移動した時にスコアを加算させる事が出来ます。

※スコアボックスはTeam Death Matchモードのみ使用可能です。

.. code-block:: xml

   <score>
       <box value="5" team="blue" filter="only-blue" cooldown="1">
           <cuboid min="-2,73,29" max="2,75,33"/>
       </box>
   </score>

<box>ノードの属性
^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値

   ``value``, 獲得する得点, Number
   ``team``, 獲得するチーム, :doc:`Team Name </xml/team>`
   ``filter``, フィルター, :doc:`Filter Name </xml/filter>`
   ``cooldown``, 次に獲得可能までの時間, Number
