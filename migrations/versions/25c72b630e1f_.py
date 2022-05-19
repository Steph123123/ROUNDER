"""empty message

Revision ID: 25c72b630e1f
Revises: b891b1d6ab50
Create Date: 2022-05-19 21:13:29.789839

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '25c72b630e1f'
down_revision = 'b891b1d6ab50'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('profile',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('profileimg', sa.String(length=1000), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('profile')
    # ### end Alembic commands ###
