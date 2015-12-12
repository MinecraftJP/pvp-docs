ブロック復元
============

``<renewables>`` は破壊されたブロックを元の状態に戻す事が出来ます。

.. code-block:: xml

   <renewables>
       <renewable rate="3" particles="true" sound="true" avoid-entities="true">
           <region>
               <cuboid min="-30,68,-30" max="-21,73,-21"/>
           </region>
           <renew>iron ore</renew>
           <renew>coal ore</renew>
           <replace>air</replace>
       </renewable>
   </renewables>

<renewable>ノードの属性
^^^^^^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値, デフォルト
   :widths: 10,60,15,15

   ``region``, 復元対象のリージョン名, `String`
   ``rate``, 毎秒のブロック復元数, `Number`, 1
   ``sound``, 復元時にサウンドを再生, `Boolean`, true
   ``particles``, 復元時にエフェクトを表示, `Boolean`, true
   ``avoid-entities``, プレイヤーと重なっている場合は復元しない, `Boolean`, true

<renewable>ノードの子要素
^^^^^^^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: ノード, 説明, 値
   :widths: 10,80,10

   ``<region>``, 復元対象のリージョン, :doc:`Region </xml/regions>`
   ``<renew>``, 復元対象のブロック, :doc:`Material </data/material>`
   ``<replace>``, 復元時に置き換え可能なブロック, :doc:`Material </data/material>`
   ``<renew-filter>``, 復元対象ブロックのフィルター。 `<renew>` とは同時に使用出来ません。, :doc:`Filter </xml/filters>`
   ``<replace-filter>``, 	復元時に置き換え可能なブロックのフィルター。 `<replace>` とは同時に使用出来ません。, :doc:`Filter </xml/filters>`

