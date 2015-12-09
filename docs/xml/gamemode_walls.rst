The Walls
===========

The Wallsゲームモードはチーム間を隔てる壁が存在し、一定時間経過後壁が消滅、両チーム間でリスポーンなしの戦闘が行われます。

このゲームモードでは最後まで生存者がいるチームが勝者となります。

.. code-block:: xml

	<walls drop-time="600" materials="sand,gravel">
	    <cuboid min="1603,76,-1552" max="1607,78,-1548"/>
	    <cuboid min="1603,76,-1552" max="1607,78,-1548"/>
	</walls>

<walls>タグの属性
--------------

.. csv-table:: 
    :header: "属性", "説明", "値"
    :widths: 15, 10, 20

    "``drop-time``", 壁が消滅するまでの時間です。秒で指定します。, "``整数``"
    "``materials``", 壁の素材です。「 |comma| 」区切りで複数指定する事が可能です。時間が来ると指定範囲内にある該当のブロックのみ消滅します。, "``Material``"

.. |comma| replace:: ,
 
