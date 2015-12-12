その他の設定
============

時間を夜間に固定します。

.. code-block:: xml

   <timelock>on</timelock>

※現在はワールドにゲームルール/gamerule doDaylightCycle falseを設定することで任意の時間に固定する事が可能です。


指定された高さ以上でブロックの編集が出来なくなります。

.. code-block:: xml

   <maxbuildheight>64</maxbuildheight>


死亡時に自動的にリスポーンします。time属性でリスポーンまでの時間指定が可能です。

.. code-block:: xml

   <autorespawn/>
   <autorespawn time="5s"/>


ワールドのDimensionを設定します。

設定出来る値は ``NORMAL`` , ``NETHER`` , ``THE_END`` です。

.. code-block:: xml

   <dimension>NETHER</dimension>


ワールドの難易度を設定します。

設定出来る値は ``PEACEFUL`` , ``EASY`` , ``NORMAL`` , ``HARD`` です。

.. code-block:: xml

   <difficulty>HARD</difficulty>

