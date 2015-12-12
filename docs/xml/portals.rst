ポータル
========

ポータルは指定のリージョンにプレイヤーが入った場合に現在地からの相対指定や、絶対値指定によりプレイヤーをテレポートさせる事が出来ます。 座標を絶対値で指定したい場合は座標の前に@を入れてください。

.. code-block:: xml

   <portals>
     <portal x="X" y="Y" z="Z" yaw="YAW" pitch="PITCH" filter="FILTERNAME">
       <cuboid min="X1,Y1,Z1" max="X2,Y2,Z2"/>
	 </portal>
   </portals>

   <portals>
     <portal x="@X" y="@Y" z="@Z" >
		<cuboid min="X1,Y1,Z1" max="X2,Y2,Z2"/>
	 </portal>
   </portals>

<portal>ノードの属性
^^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値

   ``x``, ポータルからの移動先への相対X座標です。先頭に@をつける事で絶対値で指定出来ます。, 数値
   ``y``, ポータルからの移動先への相対Y座標です。先頭に@をつける事で絶対値で指定出来ます。, 数値
   ``z``, ポータルからの移動先への相対Z座標です。先頭に@をつける事で絶対値で指定出来ます。, 数値
   ``filter``, ポータル進入時にチェックするフィルター, :doc:`Filter Name </xml/filter>`
   ``filter-message``, フィルターによるリジェクト時にプレイヤーに表示するメッセージ,文字列
